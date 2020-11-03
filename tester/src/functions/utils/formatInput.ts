export type JobConfig = {
  token: boolean;
  rule: number;
  time: number;
  concurrency: number;
};

/**
 *
 * @param {JobConfig} jobConfig Configurações para iniciar os testes
 */
export const formatInput = (jobConfig: JobConfig): JobConfig => {
  if (!jobConfig) {
    return {
      token: false,
      rule: 1,
      time: 60,
      concurrency: 1,
    };
  } else {
    return {
      token: jobConfig.token ? jobConfig.token : false,
      rule: jobConfig.rule ? jobConfig.rule : 1,
      time: jobConfig.time ? jobConfig.time : 60,
      concurrency: jobConfig.concurrency ? jobConfig.concurrency : 1,
    };
  }
};
