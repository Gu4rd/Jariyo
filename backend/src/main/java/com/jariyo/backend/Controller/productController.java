package com.jariyo.backend.Controller;

import java.util.List;

import com.jariyo.backend.Mapper.productMapper;
import com.jariyo.backend.Model.product;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class productController {
    
    private productMapper mapper;

    public productController(productMapper mapper){
        this.mapper = mapper;
    }

    @GetMapping("/reservation/{product_type}/{product_location}")
    public List<product> getProduct(@PathVariable("product_type") String product_type, @PathVariable("product_location") String product_location){
        return mapper.getProduct(product_type, product_location);
    }
/*
    @GetMapping("/reservation/{product_type}/{product_location}/options")
    public List<product> getOptionedProduct(
        @PathVariable("product_type") String product_type, @PathVariable("product_location") String product_location,
        @RequestParam("person") int person, @RequestParam int swimming_pool,
        @RequestParam("karaoke") int karaoke, @RequestParam("sauna") int sauna,
        @RequestParam("tables") int tables, @RequestParam("washing_machine") int washing_machine,
        @RequestParam("dryer") int dryer, @RequestParam("cooking_possible") int cooking_possible,
        @RequestParam("spa") int spa, @RequestParam("fitness") int fitness,
        @RequestParam("thermal_springs") int thermal_springs, @RequestParam("air_conditioner") int air_conditioner,
        @RequestParam("shower") int shower, @RequestParam("bathtub") int bathtub,
        @RequestParam("wifi") int wifi, @RequestParam("tv") int tv,
        @RequestParam("pc") int pc)*/
}
