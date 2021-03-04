package com.jariyo.backend.Controller;

import java.util.List;

import com.jariyo.backend.Mapper.productMapper;
import com.jariyo.backend.Model.options;
import com.jariyo.backend.Model.product;
import com.jariyo.backend.Model.reservation_list;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class productController {
    
    private productMapper mapper;

    public productController(productMapper mapper){
        this.mapper = mapper;
    }

    // id별 상품 검색
    @GetMapping("/reservation/{product_id}")
    public List<product> getProductById(@PathVariable("product_id") int product_id){
        return mapper.getProductById(product_id);
    }

    // 해당 지역 내 상품 검색
    @GetMapping("/reservation/{product_type}/{product_location}")
    public List<product> getProduct(@PathVariable("product_type") String product_type, @PathVariable("product_location") String product_location){
        return mapper.getProduct(product_type, product_location);
    }

    // 옵션으로 인원 조정만 했을 시
    @GetMapping("/reservation/{product_type}/{product_location}/options/{person}")
    public List<product> getPersonProduct(@PathVariable("product_type") String product_type, @PathVariable("product_location") String product_location, @PathVariable("person") int person){
        return mapper.getPersonProduct(product_type, product_location, person);
    }

    // 옵션적용 후 상품 검색
    @GetMapping("/reservation/{product_type}/{product_location}/options/{person}/{myArray}")
    public List<product> getOptionedProduct(@PathVariable("product_type") String product_type, @PathVariable("product_location") String product_location, @PathVariable("person") int person, @PathVariable("myArray") List<String> myArray){
        return mapper.getOptionedProduct(product_type, product_location, person, myArray);
    }

    // 상품 상세페이지
    @GetMapping("/itempage/{id}")
    public List<options> getProductOptions(@PathVariable("id") int id){
        return mapper.getProductOptions(id);
    }

    // 예약 내역
    @GetMapping("/reservation_list")
    public List<reservation_list> getReservation_list(){
        return mapper.getReservation_list();
    }

    // 예약
    @CrossOrigin("*")
    @PostMapping("/reservation")
    public void postReservation(@RequestBody reservation_list reservation_list){
        mapper.postReservation(reservation_list.getProduct_id(), reservation_list.getUser_id(), reservation_list.getTitle(), reservation_list.getDetailed_location(), reservation_list.getPrice(), reservation_list.getPeriod());
    }
    
}
