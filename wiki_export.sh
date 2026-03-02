#!/bin/bash
# Chronicle Wiki → NotebookLM 통합 내보내기
# 사용법: Git Bash에서 ./wiki_export.sh
# 또는 더블클릭으로 실행 (Git Bash 연결 시)

cd "$(dirname "$0")"

echo "=== Chronicle Wiki Export ==="
echo ""

# 1. git pull
echo "[1/3] git pull..."
git pull --ff-only
if [ $? -ne 0 ]; then
    echo "⚠ pull 실패. 로컬 변경사항 확인 필요."
    echo "   그래도 현재 상태로 내보내기 진행합니다."
fi
echo ""

# 2. 통합 파일 생성 (ARCHIVE, LOG 제외)
OUTPUT="FULL_WIKI.txt"
echo "[2/3] 위키 통합 중..."

# 헤더
echo "================================================================" > "$OUTPUT"
echo " CHRONICLE WIKI - 통합 내보내기" >> "$OUTPUT"
echo " 생성일시: $(date '+%Y-%m-%d %H:%M:%S')" >> "$OUTPUT"
echo " git hash: $(git rev-parse --short HEAD)" >> "$OUTPUT"
echo "================================================================" >> "$OUTPUT"
echo "" >> "$OUTPUT"

# 파일 목록 (ARCHIVE, LOG 제외, 정렬)
FILES=$(find . -name "*.md" \
    -not -path "./DOCS/ARCHIVE/*" \
    -not -path "./DOCS/DESIGN/LOG/*" \
    -not -path "./DOCS/ART/LOG/*" \
    | sort)

COUNT=0
for f in $FILES; do
    echo "────────────────────────────────────────────────────────────────" >> "$OUTPUT"
    echo "📄 FILE: $f" >> "$OUTPUT"
    echo "────────────────────────────────────────────────────────────────" >> "$OUTPUT"
    echo "" >> "$OUTPUT"
    cat "$f" >> "$OUTPUT"
    echo "" >> "$OUTPUT"
    echo "" >> "$OUTPUT"
    COUNT=$((COUNT + 1))
done

# 3. 결과
SIZE=$(wc -c < "$OUTPUT" | tr -d ' ')
SIZE_KB=$((SIZE / 1024))
LINES=$(wc -l < "$OUTPUT" | tr -d ' ')

echo "[3/3] 완료!"
echo ""
echo "  📁 파일: $OUTPUT"
echo "  📄 포함: ${COUNT}개 문서"
echo "  📏 크기: ${SIZE_KB}KB (${LINES}줄)"
echo "  🔖 커밋: $(git rev-parse --short HEAD)"
echo ""
echo "  → NotebookLM에 이 파일을 업로드하세요."
echo ""

read -p "아무 키나 누르면 종료..."
