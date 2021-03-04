package com.jariyo.backend.Controller;

import java.util.List;

import com.jariyo.backend.Model.qna;
import com.jariyo.backend.Mapper.qnaMapper;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class qnaController {
    private qnaMapper mapper;

    public qnaController(qnaMapper mapper){
        this.mapper = mapper;
    }

    @GetMapping("/qna/{writer}")
    public List<qna> getQna(@PathVariable("writer") String writer) {
        return mapper.getQna(writer);
    }

    @PostMapping("/qna/write")
    public void writeQna(@RequestBody qna qna) {
        mapper.insertQna(qna.getCategory(), qna.getType(), qna.getContent(), qna.getWriter(), qna.getStatus(), qna.getWriteDate());
    }
}
