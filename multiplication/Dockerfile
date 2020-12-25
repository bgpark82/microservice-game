FROM openjdk:8-jre-alpine
EXPOSE 8081
WORKDIR app
COPY build/libs/*.jar app.jar
CMD ["java","-jar","app.jar"]