package com.jariyo.backend.Controller;

import java.util.List;

import com.jariyo.backend.Mapper.productMapper;
import com.jariyo.backend.Model.options;
import com.jariyo.backend.Model.product;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping("/reservation/{product_type}/{product_location}/options/{person}")
    public List<product> getPersonProduct(@PathVariable("product_type") String product_type, @PathVariable("product_location") String product_location, @PathVariable("person") int person){
        return mapper.getPersonProduct(product_type, product_location, person);
    }

    @GetMapping("/reservation/{product_type}/{product_location}/options/{person}/{myArray}")
    public List<product> getOptionedProduct(@PathVariable("product_type") String product_type, @PathVariable("product_location") String product_location, @PathVariable("person") int person, @PathVariable("myArray") List<String> myArray){
        return mapper.getOptionedProduct(product_type, product_location, person, myArray);
    }

    @GetMapping("/itempage/{id}")
    public List<options> getProductOptions(@PathVariable("id") int id){
        return mapper.getProductOptions(id);
    }
}
