package de.telran.employee.dto;

public class DtoWithId {

    protected Integer id;

    public DtoWithId() {
    }

    public DtoWithId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
