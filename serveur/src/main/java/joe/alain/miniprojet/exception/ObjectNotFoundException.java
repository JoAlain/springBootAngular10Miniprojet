package joe.alain.miniprojet.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ObjectNotFoundException extends Exception{

    private static final long serialVersionUID = 1L;

    public ObjectNotFoundException(String message){
        super(message);
    }
}
