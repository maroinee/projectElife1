package com.example.project.Reposotiry;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.project.Entity.User;



@Repository
public interface UserRepository extends JpaRepository <User, Long> {
    Optional<User> findByEmail(String email);
}