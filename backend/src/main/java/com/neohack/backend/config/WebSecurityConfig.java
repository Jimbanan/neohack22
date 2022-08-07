package com.neohack.backend.config;//package com.neoflex.neohack22.config;
//
//import com.neoflex.neohack22.services.UserDataServiceImpl;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
//@Configuration
//@EnableWebSecurity
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//    @Autowired
//    UserDataServiceImpl userDataService;
//
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
//        return bCryptPasswordEncoder;
//    }
//
//    @Override
//    protected void configure(HttpSecurity httpSecurity) throws Exception {
//
//        httpSecurity.authorizeRequests()
//                .antMatchers("/**").hasAnyRole("ADMIN")
//                .antMatchers("/").hasAnyRole("TEACHER")
//                .antMatchers("/").hasAnyRole("USER")
//                .and().formLogin().permitAll();
//
////        httpSecurity
////                .csrf()
////                    .disable()
////                .authorizeRequests()
////                    //Доступ только для не зарегистрированных пользователей
////                    .antMatchers("/registration").not().fullyAuthenticated()
////                    //Доступ только для пользователей с ролью Администратор
////                    .antMatchers("/admin/**").hasRole("ADMIN")
////                    .antMatchers("/news").hasRole("USER")
////                    //Доступ разрешен всем пользователей
////                    .antMatchers("/", "/resources/**").permitAll()
////                //Все остальные страницы требуют аутентификации
////                .anyRequest().authenticated()
////                .and()
////                    //Настройка для входа в систему
////                    .formLogin()
////                    .loginPage("/login")
////                    //Перенарпавление на главную страницу после успешного входа
////                    .defaultSuccessUrl("/")
////                    .permitAll()
////                .and()
////                    .logout()
////                    .permitAll()
////                    .logoutSuccessUrl("/");
//    }
//
//    @Autowired
//    protected void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//        User.UserBuilder userBuilder = User.withDefaultPasswordEncoder();
//
//        auth.inMemoryAuthentication()
//                .withUser(userBuilder.username("zaur@mail.ru")
//                        .password("zaur")
//                        .roles("ADMIN"));
////        auth.userDetailsService(userDataService).passwordEncoder(bCryptPasswordEncoder());
//    }
//}
