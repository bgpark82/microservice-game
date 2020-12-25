FROM openjdk:8-jre-alpine
EXPOSE 8082
WORKDIR app
COPY build/libs/*.jar app.jar
CMD ["java","-jar","app.jar"]