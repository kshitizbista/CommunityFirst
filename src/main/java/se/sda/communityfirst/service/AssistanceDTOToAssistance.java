package se.sda.communityfirst.service;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class AssistanceDTOToAssistance implements Converter<AssistanceDTO, Assistance> {

    @Override
    public Assistance convert(AssistanceDTO assistanceDTO) {
        if (assistanceDTO == null) {
            return null;
        }

        final Assistance assistance = new Assistance();
        assistance.setId(assistanceDTO.getId());
        assistance.setTitle(assistanceDTO.getTitle());
        assistance.setDescription(assistanceDTO.getDescription());
        assistance.setAssistanceType(assistanceDTO.getAssistanceType());
        assistance.setPostedDate(assistanceDTO.getPostedDate());
        return assistance;
    }
}
