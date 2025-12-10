# Awesome BYOC Tools

A curated list of **Bring Your Own Cloud (BYOC)** tools for developers.

> **BYOC** (Bring Your Own Cloud) is a deployment model where software runs in *your* cloud account instead of a vendor's. This gives you data sovereignty, compliance control, cost transparency, and no vendor lock-in.

**[View the website](https://buildyourown.dev)**

---

## Contents

- [Databases](#databases)
- [Streaming](#streaming)
- [Observability](#observability)
- [Data Integration](#data-integration)
- [Dev Platforms](#dev-platforms)

---

## Databases

- [Aiven](https://aiven.io/docs/platform/concepts/byoc) - Managed open source data infrastructure. `Commercial`
- [CockroachDB](https://www.cockroachlabs.com/product/cloud/bring-your-own-cloud/) - Distributed SQL database. ([Source](https://github.com/cockroachdb/cockroach)) `Hybrid`
- [Pinecone](https://docs.pinecone.io/guides/production/bring-your-own-cloud) - Vector database for AI applications. `Commercial`
- [SingleStore](https://www.singlestore.com/blog/singlestore-byoc-on-aws/) - Distributed SQL database for real-time analytics. `Commercial`

## Streaming

- [Redpanda](https://www.redpanda.com/product/bring-your-own-cloud-byoc) - Kafka-compatible streaming platform. `Hybrid`
- [WarpStream](https://www.confluent.io/learn/bring-your-own-cloud/) - Kafka-compatible streaming by Confluent. `Commercial`

## Observability

- [Grafana](https://grafana.com/products/bring-your-own-cloud-byoc/) - Open source observability platform. ([Source](https://github.com/grafana/grafana)) `Open Source`
- [Groundcover](https://www.groundcover.com/blog/why-byoc-is-the-future) - Cloud-native observability platform. `Commercial`
- [Honeycomb](https://www.honeycomb.io/blog/honeycomb-launches-new-private-cloud-offering-address-security-compliance-cost-concerns) - Observability for distributed systems. `Commercial`

## Data Integration

- [Snowflake Openflow](https://www.snowflake.com/en/blog/openflow-byoc-data-integration/) - BYOC data integration from Snowflake. `Commercial`
- [Estuary](https://docs.estuary.dev/private-byoc/byoc-deployments/) - Real-time ETL and data integration. `Hybrid`

## Dev Platforms

- [Retool](https://docs.retool.com/self-hosted/retool-managed/concepts/architecture) - Internal tools platform with self-hosted option. `Commercial`

---

## What is BYOC?

**Bring Your Own Cloud (BYOC)** is a deployment model where software runs in your own cloud infrastructure rather than in a vendor's shared environment.

### Benefits

- **Data Sovereignty** — Your data never leaves your cloud account
- **Compliance** — Meet SOC 2, HIPAA, GDPR, FedRAMP requirements
- **No Vendor Lock-in** — Maintain control over your infrastructure
- **Cost Transparency** — Infrastructure costs on your cloud bill

### Common Patterns

| Pattern | Description |
|---------|-------------|
| Control Plane / Data Plane | Vendor hosts management UI, your cloud runs the workloads |
| Agent-Based | Lightweight agent in your environment connects outbound |
| Full Self-Hosted | Everything runs in your environment (air-gapped capable) |

---

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

- **Add a tool**: Open a PR to add to the list
- **Report issues**: Open an issue on GitHub
- **Improve docs**: PRs for documentation improvements are appreciated

---

## License

This list is under the [MIT License](LICENSE).
