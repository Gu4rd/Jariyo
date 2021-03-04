package com.jariyo.backend.Mapper;

import java.util.List;
import java.util.Date;

import com.jariyo.backend.Model.qna;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Insert;

@Mapper
public interface qnaMapper {
    @Select("SELECT * FROM qna WHERE writer = #{writer}")
    List<qna> getQna(@Param("writer") String writer);

    @Insert("insert into qna(category, type, content, writer, status, writeDate) values(#{category}, #{type}, #{content}, #{writer}, #{status}, #{writeDate})")
    void insertQna(@Param("category") String category, @Param("type") String type, @Param("content") String content, @Param("writer") String writer, @Param("status") int status, @Param("writeDate") Date writeDate);
}
