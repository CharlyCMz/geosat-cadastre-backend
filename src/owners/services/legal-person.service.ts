import { Injectable } from '@nestjs/common';
import { LegalPerson } from '../entities/legal-person.entity';

@Injectable()
export class LegalPersonService {
  findOne(): LegalPerson[] {
    return [
      {
        address: 'casa ejemplo',
        comercialValue: 1000000,
        eMail: 'ejemplo@gmail.com',
        nit: 1,
        businessName: 'Holi',
      },
    ];
  }
}
