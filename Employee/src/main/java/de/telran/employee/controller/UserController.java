package de.telran.employee.controller;

import de.telran.employee.dto.UserDto;
import de.telran.employee.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("")
    public UserDto createUser(@RequestBody UserDto userDto) {
        return userRepository.createRecord(userDto);
    }

    @PutMapping("/{id}")
    public UserDto updateUser(@PathVariable Integer id, @RequestBody UserDto userDto) {
        return userRepository.updateRecord(userDto);
    }

    @GetMapping("")
    public List<UserDto> updateUser() {
        return userRepository.getAllRecords();
    }
}
