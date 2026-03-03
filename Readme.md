# Build Image
## docker build -t sample-server -f ./Dockerfile .
## docker build -t <image-name> -f <path-of-dockerfile> <path เริ่มต้นเพื่อรัน docker file>
## docker build -t <image-name> <path เริ่มต้นเพื่อรัน docker file> //-f <path-of-dockerfile> โดย default คือ ./Dockerfile หากเป็น ./Dockerfile อยู่ก็ไม่จำเป็นต้องใช้ -f