package com.jariyo.backend.Mapper;

import java.util.List;

import com.jariyo.backend.Model.options;
import com.jariyo.backend.Model.product;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface productMapper {
    
    @Select("SELECT * FROM reservation WHERE product_type = #{product_type} AND product_location = #{product_location}")
    List<product> getProduct(@Param("product_type") String product_type, @Param("product_location") String product_location);

    @Select("SELECT * FROM reservation WHERE product_type = #{product_type} AND product_location = #{product_location} AND acceptable_person >= #{person}")
    List<product> getPersonProduct(@Param("product_type") String product_type, @Param("product_location") String product_location, @Param("person") int person);

    @Select("SELECT * FROM productOptions WHERE id = #{id}")
    List<options> getProductOptions(@Param("id") int id);









    @Select({"<script>",
            "SELECT *",
            "FROM reservation",
            "WHERE product_type = #{product_type} AND product_location = #{product_location} AND acceptable_person >= #{person}",
            "<if test='myArray != null and myArray.size == 1'>",
                "AND ${myArray.get(0)} = 1",
            "</if>",
            "<if test='myArray != null and myArray.size == 2'>",
                "AND ${myArray.get(0)} = 1 AND ${myArray.get(1)} = 1",
            "</if>",
            "<if test='myArray != null and myArray.size == 3'>",
                "AND ${myArray.get(0)} = 1 AND ${myArray.get(1)} = 1 AND ${myArray.get(2)} = 1",
            "</if>",
            "<if test='myArray != null and myArray.size == 4'>",
                "AND ${myArray.get(0)} = 1 AND ${myArray.get(1)} = 1 AND ${myArray.get(2)} = 1 AND ${myArray.get(3)} = 1",
            "</if>",
            "<if test='myArray != null and myArray.size == 5'>",
                "AND ${myArray.get(0)} = 1 AND ${myArray.get(1)} = 1 AND ${myArray.get(2)} = 1 AND ${myArray.get(3)} = 1 AND ${myArray.get(4)} = 1",
            "</if>",
            "<if test='myArray != null and myArray.size == 6'>",
                "AND ${myArray.get(0)} = 1 AND ${myArray.get(1)} = 1 AND ${myArray.get(2)} = 1 AND ${myArray.get(3)} = 1 AND ${myArray.get(4)} = 1 AND ${myArray.get(5)} = 1",
            "</if>",
            "<if test='myArray != null and myArray.size == 7'>",
                "AND ${myArray.get(0)} = 1 AND ${myArray.get(1)} = 1 AND ${myArray.get(2)} = 1 AND ${myArray.get(3)} = 1 AND ${myArray.get(4)} = 1 AND ${myArray.get(5)} = 1 AND ${myArray.get(6)} = 1",
            "</if>",
            "<if test='myArray != null and myArray.size == 8'>",
                "AND ${myArray.get(0)} = 1 AND ${myArray.get(1)} = 1 AND ${myArray.get(2)} = 1 AND ${myArray.get(3)} = 1 AND ${myArray.get(4)} = 1 AND ${myArray.get(5)} = 1 AND ${myArray.get(6)} = 1 AND ${myArray.get(7)} = 1",
            "</if>",
            "<if test='myArray != null and myArray.size == 9'>",
                "AND ${myArray.get(0)} = 1 AND ${myArray.get(1)} = 1 AND ${myArray.get(2)} = 1 AND ${myArray.get(3)} = 1 AND ${myArray.get(4)} = 1 AND ${myArray.get(5)} = 1 AND ${myArray.get(6)} = 1 AND ${myArray.get(7)} = 1 AND ${myArray.get(8)} = 1",
            "</if>",
            "<if test='myArray != null and myArray.size == 10'>",
                "AND ${myArray.get(0)} = 1 AND ${myArray.get(1)} = 1 AND ${myArray.get(2)} = 1 AND ${myArray.get(3)} = 1 AND ${myArray.get(4)} = 1 AND ${myArray.get(5)} = 1 AND ${myArray.get(6)} = 1 AND ${myArray.get(7)} = 1 AND ${myArray.get(8)} = 1 AND ${myArray.get(9)} = 1",
            "</if>",
            "<if test='myArray != null and myArray.size == 11'>",
                "AND ${myArray.get(0)} = 1 AND ${myArray.get(1)} = 1 AND ${myArray.get(2)} = 1 AND ${myArray.get(3)} = 1 AND ${myArray.get(4)} = 1 AND ${myArray.get(5)} = 1 AND ${myArray.get(6)} = 1 AND ${myArray.get(7)} = 1 AND ${myArray.get(8)} = 1 AND ${myArray.get(9)} = 1 AND ${myArray.get(10)} = 1",
            "</if>",
            "<if test='myArray != null and myArray.size == 12'>",
                "AND ${myArray.get(0)} = 1 AND ${myArray.get(1)} = 1 AND ${myArray.get(2)} = 1 AND ${myArray.get(3)} = 1 AND ${myArray.get(4)} = 1 AND ${myArray.get(5)} = 1 AND ${myArray.get(6)} = 1 AND ${myArray.get(7)} = 1 AND ${myArray.get(8)} = 1 AND ${myArray.get(9)} = 1 AND ${myArray.get(10)} = 1 AND ${myArray.get(11)} = 1",
            "</if>",
            "<if test='myArray != null and myArray.size == 13'>",
                "AND ${myArray.get(0)} = 1 AND ${myArray.get(1)} = 1 AND ${myArray.get(2)} = 1 AND ${myArray.get(3)} = 1 AND ${myArray.get(4)} = 1 AND ${myArray.get(5)} = 1 AND ${myArray.get(6)} = 1 AND ${myArray.get(7)} = 1 AND ${myArray.get(8)} = 1 AND ${myArray.get(9)} = 1 AND ${myArray.get(10)} = 1 AND ${myArray.get(11)} = 1 AND ${myArray.get(12)} = 1",
            "</if>",
            "<if test='myArray != null and myArray.size == 14'>",
                "AND ${myArray.get(0)} = 1 AND ${myArray.get(1)} = 1 AND ${myArray.get(2)} = 1 AND ${myArray.get(3)} = 1 AND ${myArray.get(4)} = 1 AND ${myArray.get(5)} = 1 AND ${myArray.get(6)} = 1 AND ${myArray.get(7)} = 1 AND ${myArray.get(8)} = 1 AND ${myArray.get(9)} = 1 AND ${myArray.get(10)} = 1 AND ${myArray.get(11)} = 1 AND ${myArray.get(12)} = 1 AND ${myArray.get(13)} = 1",
            "</if>",
            "<if test='myArray != null and myArray.size == 15'>",
                "AND ${myArray.get(0)} = 1 AND ${myArray.get(1)} = 1 AND ${myArray.get(2)} = 1 AND ${myArray.get(3)} = 1 AND ${myArray.get(4)} = 1 AND ${myArray.get(5)} = 1 AND ${myArray.get(6)} = 1 AND ${myArray.get(7)} = 1 AND ${myArray.get(8)} = 1 AND ${myArray.get(9)} = 1 AND ${myArray.get(10)} = 1 AND ${myArray.get(11)} = 1AND ${myArray.get(12)} = 1 AND ${myArray.get(13)} = 1 AND ${myArray.get(14)} = 1",
            "</if>",
            "</script>"})
    List<product> getOptionedProduct(@Param("product_type") String product_type, @Param("product_location") String product_location, @Param("person") int person, @Param("myArray") List<String> myArray);
}
