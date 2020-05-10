package se.sda.communityfirst.service;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class AssistanceToAssistanceDTO implements Converter<Assistance, AssistanceDTO> {
    @Override
    public AssistanceDTO convert(Assistance assistance) {
        if (assistance == null) {
            return null;
        }
        final AssistanceDTO assistanceDTO = new AssistanceDTO();
        assistanceDTO.setId(assistance.getId());
        assistanceDTO.setTitle(assistance.getTitle());
        assistanceDTO.setDescription(assistance.getDescription());
        assistanceDTO.setAssistanceType(assistance.getAssistanceType());
        assistanceDTO.setPostedDate(assistance.getPostedDate());
        assistanceDTO.setCommunityId(assistance.getCommunity().getId());
        if (assistance.getUser() != null) {
            assistanceDTO.setUserId(assistance.getUser().getId());
            assistanceDTO.setFirstname(assistance.getUser().getFirstname());
            assistanceDTO.setLastname(assistance.getUser().getLastname());
            assistanceDTO.setEmail(assistance.getUser().getEmail());
        }
        return assistanceDTO;
    }
}
