#!/bin/bash
# Chronicle Wiki + LOG 교차검증용 export
cd "$(dirname "$0")"

OUTPUT="FULL_WIKI_WITH_LOG.txt"

# 헤더
cat > "$OUTPUT" << 'HEADER'
================================================================
 CHRONICLE WIKI — 본문 + LOG 통합 (교차 검증용)
================================================================

이 파일은 두 영역으로 나뉘어 있습니다:

  PART 1: 본문 (위키 자체)
    - 운영 / 전투 / 스테이지 / 메타 / 오더 — 현재 결정 박힌 자리
    - "지금 작품이 어떻게 짜여 있는가"

  PART 2: 설계 LOG (DOCS/DESIGN/LOG/)
    - 시기순 결정 근거. 폐기 결정 포함
    - "왜 이 결로 박혔는가, 어떤 결을 폐기했는가"

교차 검증 시:
  - PART 1만 보면 *현재 짜임*만 평가 가능
  - PART 1 + PART 2 같이 보면 *짜임의 깊이*와 *결정의 일관성*까지 평가 가능
  - LOG에 폐기 박힌 결은 *현재 위키에 없음*. 그 결을 부활시키지 말 것

알아둘 자리:
  - 5-8 큰 재설계 진행중. 02_전투/* 본문은 5-7 결, 경고 배너로 5-8 결 표시
  - 5-9 그리스 결 무대.md 경고 배너에 박힘 (LOG 없음, 본문 sweep 진행중)
  - 카드 콘텐츠 0장 (검증 안 됨). 종이/디지털 프로토 0회

================================================================
HEADER
echo "" >> "$OUTPUT"
echo " 생성일시: $(date '+%Y-%m-%d %H:%M:%S')" >> "$OUTPUT"
echo " git hash: $(git rev-parse --short HEAD)" >> "$OUTPUT"
echo "================================================================" >> "$OUTPUT"
echo "" >> "$OUTPUT"

# PART 1: 본문
echo "" >> "$OUTPUT"
echo "================================================================" >> "$OUTPUT"
echo " PART 1: 본문 (현재 위키)" >> "$OUTPUT"
echo "================================================================" >> "$OUTPUT"
echo "" >> "$OUTPUT"

PART1_FILES=$(find . -name "*.md" \
    -not -path "./DOCS/ARCHIVE/*" \
    -not -path "./DOCS/DESIGN/LOG/*" \
    -not -path "./DOCS/ART/LOG/*" \
    | sort)

PART1_COUNT=0
for f in $PART1_FILES; do
    echo "────────────────────────────────────────────────────────────────" >> "$OUTPUT"
    echo "📄 FILE: $f" >> "$OUTPUT"
    echo "────────────────────────────────────────────────────────────────" >> "$OUTPUT"
    echo "" >> "$OUTPUT"
    cat "$f" >> "$OUTPUT"
    echo "" >> "$OUTPUT"
    echo "" >> "$OUTPUT"
    PART1_COUNT=$((PART1_COUNT + 1))
done

# PART 2: LOG
echo "" >> "$OUTPUT"
echo "================================================================" >> "$OUTPUT"
echo " PART 2: 설계 LOG (시기순)" >> "$OUTPUT"
echo "================================================================" >> "$OUTPUT"
echo "" >> "$OUTPUT"

PART2_FILES=$(find ./DOCS/DESIGN/LOG -name "*.md" | sort)

PART2_COUNT=0
for f in $PART2_FILES; do
    echo "────────────────────────────────────────────────────────────────" >> "$OUTPUT"
    echo "📜 LOG: $f" >> "$OUTPUT"
    echo "────────────────────────────────────────────────────────────────" >> "$OUTPUT"
    echo "" >> "$OUTPUT"
    cat "$f" >> "$OUTPUT"
    echo "" >> "$OUTPUT"
    echo "" >> "$OUTPUT"
    PART2_COUNT=$((PART2_COUNT + 1))
done

# 결과
SIZE=$(wc -c < "$OUTPUT" | tr -d ' ')
SIZE_KB=$((SIZE / 1024))
LINES=$(wc -l < "$OUTPUT" | tr -d ' ')

echo ""
echo "  📁 파일: $OUTPUT"
echo "  📄 본문: ${PART1_COUNT}개 / LOG: ${PART2_COUNT}개"
echo "  📏 크기: ${SIZE_KB}KB (${LINES}줄)"
echo "  🔖 커밋: $(git rev-parse --short HEAD)"
