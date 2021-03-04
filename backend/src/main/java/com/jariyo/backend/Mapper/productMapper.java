package com.jariyo.backend.Mapper;

import java.util.List;

import com.jariyo.backend.Model.options;
import com.jariyo.backend.Model.product;
import com.jariyo.backend.Model.reservation_list;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface productMapper {

    @Select("SELECT * FROM reservation WHERE id = #{product_id}")
    List<product> getProductById(@Param("product_id") int product_id);
    
    @Select("SELECT * FROM reservation WHERE product_type = #{product_type} AND product_location = #{product_location}")
    List<product> getProduct(@Param("product_type") String product_type, @Param("product_location") String product_location);

    @Select("SELECT * FROM reservation WHERE product_type = #{product_type} AND product_location = #{product_location} AND acceptable_person >= #{person}")
    List<product> getPersonProduct(@Param("product_type") String product_type, @Param("product_location") String product_location, @Param("person") int person);

    @Select("SELECT * FROM productOptions WHERE id = #{id}")
    List<options> getProductOptions(@Param("id") int id);

    @Select("SELECT * FROM reservation_list")
    List<reservation_list> getReservation_list();

    @Insert("INSERT INTO reservation_list(product_id, user_id, title, detailed_location, price, period) VALUES(#{product_id}, #{user_id}, #{title}, #{detailed_location}, #{price}, #{period})")
    int postReservation(@Param("product_id") int product_id, @Param("user_id") String user_id, @Param("title") String title, @Param("detailed_location") String detailed_location, @Param("price") int price, @Param("period") String period);


    // 동적 쿼리
    // 옵션의 개수는 0개 ~ 16개로 정확한 값을 알 수 없음
    // 선택한 옵션 갯수만큼 쿼리를 반복해 옵션을 적용한 상품 검색
    @Select({"<script>",
            "SELECT *",
            "FROM reservation",
            "WHERE product_type = #{product_type} AND product_location = #{product_location} AND acceptable_person >= #{person}",
            "<if test='myArray != null'>",
            "   <foreach item='columnName' collection='myArray' separator=' and ' open=' and '>",
            "       ${columnName} = 1",
            "   </foreach>",
            "</if>",
            "</script>"})
    List<product> getOptionedProduct(@Param("product_type") String product_type, @Param("product_location") String product_location, @Param("person") int person, @Param("myArray") List<String> myArray);
}
