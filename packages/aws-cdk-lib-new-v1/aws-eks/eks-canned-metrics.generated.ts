/* eslint-disable prettier/prettier,max-len */
export interface MetricWithDims<D> {
  readonly namespace: string;

  readonly metricName: string;

  readonly statistic: string;

  readonly dimensionsMap: D;
}

export class ContainerInsightsMetrics {
  public static nodeCpuLimitSum(dimensions: { ClusterName: string; }): MetricWithDims<{ ClusterName: string; }> {
    return {
      "namespace": "ContainerInsights",
      "metricName": "node_cpu_limit",
      "dimensionsMap": dimensions,
      "statistic": "Sum"
    };
  }

  public static nodeCpuUsageTotalSum(dimensions: { ClusterName: string; }): MetricWithDims<{ ClusterName: string; }> {
    return {
      "namespace": "ContainerInsights",
      "metricName": "node_cpu_usage_total",
      "dimensionsMap": dimensions,
      "statistic": "Sum"
    };
  }

  public static nodeMemoryLimitSum(dimensions: { ClusterName: string; }): MetricWithDims<{ ClusterName: string; }> {
    return {
      "namespace": "ContainerInsights",
      "metricName": "node_memory_limit",
      "dimensionsMap": dimensions,
      "statistic": "Sum"
    };
  }

  public static nodeMemoryWorkingSetSum(dimensions: { ClusterName: string; }): MetricWithDims<{ ClusterName: string; }> {
    return {
      "namespace": "ContainerInsights",
      "metricName": "node_memory_working_set",
      "dimensionsMap": dimensions,
      "statistic": "Sum"
    };
  }

  public static podNetworkRxBytesAverage(dimensions: { ClusterName: string; }): MetricWithDims<{ ClusterName: string; }> {
    return {
      "namespace": "ContainerInsights",
      "metricName": "pod_network_rx_bytes",
      "dimensionsMap": dimensions,
      "statistic": "Average"
    };
  }

  public static podNetworkTxBytesAverage(dimensions: { ClusterName: string; }): MetricWithDims<{ ClusterName: string; }> {
    return {
      "namespace": "ContainerInsights",
      "metricName": "pod_network_tx_bytes",
      "dimensionsMap": dimensions,
      "statistic": "Average"
    };
  }

  public static nodeNetworkTotalBytesAverage(dimensions: { ClusterName: string; }): MetricWithDims<{ ClusterName: string; }> {
    return {
      "namespace": "ContainerInsights",
      "metricName": "node_network_total_bytes",
      "dimensionsMap": dimensions,
      "statistic": "Average"
    };
  }

  public static clusterFailedNodeCountAverage(dimensions: { ClusterName: string; }): MetricWithDims<{ ClusterName: string; }> {
    return {
      "namespace": "ContainerInsights",
      "metricName": "cluster_failed_node_count",
      "dimensionsMap": dimensions,
      "statistic": "Average"
    };
  }

  public static nodeFilesystemUtilizationp90(dimensions: { ClusterName: string; }): MetricWithDims<{ ClusterName: string; }> {
    return {
      "namespace": "ContainerInsights",
      "metricName": "node_filesystem_utilization",
      "dimensionsMap": dimensions,
      "statistic": "p90"
    };
  }

  public static clusterNodeCountAverage(dimensions: { ClusterName: string; }): MetricWithDims<{ ClusterName: string; }> {
    return {
      "namespace": "ContainerInsights",
      "metricName": "cluster_node_count",
      "dimensionsMap": dimensions,
      "statistic": "Average"
    };
  }

  public static podCpuUtilizationAverage(dimensions: { ClusterName: string; }): MetricWithDims<{ ClusterName: string; }> {
    return {
      "namespace": "ContainerInsights",
      "metricName": "pod_cpu_utilization",
      "dimensionsMap": dimensions,
      "statistic": "Average"
    };
  }
}