package kr.ac.yonsei.yctech.buskers.user.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class UpdateUserPayload {

    @NotBlank
    @Size(min = 2, max = 10)
    private String name;

}
