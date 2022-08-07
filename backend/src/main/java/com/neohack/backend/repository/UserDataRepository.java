package com.neohack.backend.repository;

import com.neohack.backend.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserDataRepository extends CrudRepository<User, Long> {
    User findByEmailAndPassword(String email, String password);
    User findByEmail(String email);
}
