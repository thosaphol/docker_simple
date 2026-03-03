# Base Image
FROM image:tage-alpine
alpine => lightweight image

# Build Image
- docker build -t sample-server -f ./Dockerfile .  
- docker build -t <image-name> -f <path-of-dockerfile> <path เริ่มต้นเพื่อรัน docker file>  
- docker build -t <image-name> <path เริ่มต้นเพื่อรัน docker file> //-f <path-of-dockerfile> โดย default คือ ./Dockerfile หากเป็น ./Dockerfile อยู่ก็ไม่จำเป็นต้องใช้ -f  

# Container
- docker run -d -p <Port ที่เข้าถึงได้จากภายนอก>:<Port ของ container> <image-name>  --name <container-name>
  -d option => run เป็น background  
  -p option => port mapping  
- docker rm -f <container-name>, -f option => force  
- docker ps ดูว่ามี container อะไรรันอยู่บ้าง

# logging
- docker logs <container-name/container-id>

# Docker Compose
- docker-compose up -d --build  
  -d => run background, --build => build ใหม่ทุกครั้ง
- docker-compose down  => down container ที่กำลัง run จาก docker-compose file ลง 