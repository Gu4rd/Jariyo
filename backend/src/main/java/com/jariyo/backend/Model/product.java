package com.jariyo.backend.Model;

public class product {
    private int id;
    private String product_type;
    private String product_location;
    private String title;
    private int price;
    private String detailed_location;
    private int recommended;
    private int acceptable_person;
    private int swimming_poop;
    private int karaoke;
    private int sauna;
    private int tables;
    private int washing_machine;
    private int dryer;
    private int cooking_possible;
    private int spa;
    private int fitness;
    private int thermal_springs;
    private int air_conditioner;
    private int shower;
    private int bathtub;
    private int wifi;
    private int tv;
    private int pc;

    public product(
        int id, 
        String product_type, 
        String product_location, 
        String title,
        int price,
        String detailed_location,
        int recommended,
        int acceptable_person,
        int swimming_poop,
        int karaoke,
        int sauna,
        int tables,
        int washing_machine,
        int dryer,
        int cooking_possible,
        int spa,
        int fitness,
        int thermal_springs,
        int air_conditioner,
        int shower,
        int bathtub,
        int wifi,
        int tv,
        int pc)
        {
            super();
            this.id = id;
            this.product_type = product_type;
            this.product_location = product_location;
            this.title = title;
            this.price = price;
            this.detailed_location = detailed_location;
            this.recommended = recommended;
            this.acceptable_person = acceptable_person;
            this.swimming_poop = swimming_poop;
            this.karaoke = karaoke;
            this.sauna = sauna;
            this.tables = tables;
            this.washing_machine = washing_machine;
            this.dryer = dryer;
            this.cooking_possible = cooking_possible;
            this.spa = spa;
            this.fitness = fitness;
            this.thermal_springs = thermal_springs;
            this.air_conditioner = air_conditioner;
            this.shower = shower;
            this.bathtub = bathtub;
            this.wifi = wifi;
            this.tv = tv;
            this.pc = pc;
            
    }

    public int getId(){
        return id;
    }
    public void setId(int id){
        this.id = id;
    }

    public String getProduct_type(){
        return product_type;
    }
    public void setProduct_type(String product_type){
        this.product_type = product_type;
    }

    public String getProduct_location(){
        return product_location;
    }
    public void setProduct_location(String product_location){
        this.product_location = product_location;
    }

    public String getTitle(){
        return title;
    }
    public void setTitle(String title){
        this.title = title;
    }

    public int getPrice(){
        return price;
    }
    public void setPrice(int price){
        this.price = price;
    }

    public String getDetailed_location(){
        return detailed_location;
    }
    public void setDetailed_location(String detailed_location){
        this.detailed_location = detailed_location;
    }

    public int getRecommended(){
        return recommended;
    }
    public void setRecommended(int recommended){
        this.recommended = recommended;
    }

    public int getAcceptable_person(){
        return acceptable_person;
    }
    public void setAcceptable_person(int acceptable_person){
        this.acceptable_person = acceptable_person;
    }

    public int getSwimming_poop(){
        return swimming_poop;
    }
    public void setSwimming_poop(int swimming_poop){
        this.swimming_poop = swimming_poop;
    }

    public int getKaraoke(){
        return karaoke;
    }
    public void setKaraoke(int karaoke){
        this.karaoke = karaoke;
    }

    public int getSauna(){
        return sauna;
    }
    public void setSauna(int sauna){
        this.id = sauna;
    }

    public int getTables(){
        return tables;
    }
    public void setTables(int tables){
        this.tables = tables;
    }

    public int getWashing_machine(){
        return washing_machine;
    }
    public void setWashing_machine(int washing_machine){
        this.washing_machine = washing_machine;
    }

    public int getDryer(){
        return dryer;
    }
    public void setDryer(int dryer){
        this.dryer = dryer;
    }

    public int getCooking_possible(){
        return cooking_possible;
    }
    public void Cooking_possible(int cooking_possible){
        this.cooking_possible = cooking_possible;
    }

    public int getSpa(){
        return spa;
    }
    public void setSpa(int spa){
        this.spa = spa;
    }

    public int getFitness(){
        return fitness;
    }
    public void setFitness(int fitness){
        this.fitness = fitness;
    }

    public int getThermal_springs(){
        return thermal_springs;
    }
    public void setThermal_springs(int thermal_springs){
        this.thermal_springs = thermal_springs;
    }

    public int getAir_conditioner(){
        return air_conditioner;
    }
    public void setAir_conditioner(int air_conditioner){
        this.air_conditioner = air_conditioner;
    }

    public int getShower(){
        return shower;
    }
    public void setShower(int shower){
        this.shower = shower;
    }

    public int getBathtub(){
        return bathtub;
    }
    public void setBathtub(int bathtub){
        this.bathtub = bathtub;
    }

    public int getWifi(){
        return wifi;
    }
    public void setWifi(int wifi){
        this.wifi = wifi;
    }

    public int getTv(){
        return tv;
    }
    public void setTv(int tv){
        this.tv = tv;
    }

    public int getPc(){
        return pc;
    }
    public void setPc(int pc){
        this.pc = pc;
    }
    
}
