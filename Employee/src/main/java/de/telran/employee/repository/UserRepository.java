package de.telran.employee.repository;


import de.telran.employee.dto.UserDto;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.Date;

@Repository
public class UserRepository extends AbstractRepository<UserDto>{

    @PostConstruct
    public void init() {
        createRecord(new UserDto(1, "Donald", "Duck", "donal@com.com","555555", new Date()));
    }

}

