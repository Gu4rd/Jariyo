package com.jariyo.backend.Mapper;

import java.util.List;

import com.jariyo.backend.Model.product;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface productMapper {
    
    @Select("SELECT * FROM reservation WHERE product_type = #{product_type} AND product_location = #{product_location}")
    List<product> getProduct(@Param("product_type") String product_type, @Param("product_location") String product_location);
}
