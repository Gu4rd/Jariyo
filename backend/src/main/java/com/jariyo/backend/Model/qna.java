package com.jariyo.backend.Model;

import java.util.Date;

public class qna {
    private String category;
    private String type;
    private String content;
    private String writer;
    private int status;
    private Date writeDate;

    public qna(String category, String type, String content, String writer, int status, Date writeDate) {
        super();
        this.category = category;
        this.type = type;
        this.content = content;
        this.writer = writer;
        this.status = status;
        this.writeDate = writeDate;
    }

    public void setCategory(String category) {
        this.category = category;
    }
    public String getCategory() {
        return category;
    }

    public void setType(String type) {
        this.type = type;
    }
    public String getType() {
        return type;
    }

    public void setContent(String content) {
        this.content = content;
    }
    public String getContent() {
        return content;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }
    public String getWriter() {
        return writer;
    }

    public void setStatus(int status) {
        this.status = status;
    }
    public int getStatus() {
        return status;
    }

    public void setWriteDate(Date writeDate) {
        this.writeDate = writeDate;
    }
    public Date getWriteDate() {
        return writeDate;
    }
}
