FROM openjdk:8-jre-alpine
EXPOSE 8761
WORKDIR app
COPY build/libs/*.jar app.jar
CMD ["java","-jar","app.jar"]