/*
 * Copyright (C) 2018 Zhejiang xiaominfo Technology CO.,LTD.
 * All rights reserved.
 * Official Web Site: http://www.xiaominfo.com.
 * Developer Web Site: http://open.xiaominfo.com.
 */
package io.swagger.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface DynamicParameter {

    /**
     * Name of the parameter.
     */
    String name() default "";

    /**
     * A brief description of the parameter.
     */
    String value() default "";


    /**
     * Specifies if the parameter is required or not.
     * <p>
     * Path parameters should always be set as required.
     */
    boolean required() default false;

    /**
     * The class of the parameter.
     * <p>
     * Overrides {@code dataType} if provided.
     */
    Class<?> dataTypeClass() default Void.class;

    /**
     * a single example for non-body type parameters
     *
     * @since 1.5.4
     *
     * @return
     */
    String example() default "";

}