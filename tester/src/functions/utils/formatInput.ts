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
  return {
    token: jobConfig.token ? jobConfig.token : false,
    rule: jobConfig.rule ? jobConfig.rule : 1,
    time: jobConfig.time ? jobConfig.time : 3600,
    concurrency: jobConfig.concurrency ? jobConfig.concurrency : 1,
  };
};
