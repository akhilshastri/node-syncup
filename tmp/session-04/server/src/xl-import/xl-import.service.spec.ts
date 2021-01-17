import { Test, TestingModule } from '@nestjs/testing';
import { XlImportService } from './xl-import.service';

describe('XlImportService', () => {
  let service: XlImportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XlImportService],
    }).compile();

    service = module.get<XlImportService>(XlImportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
