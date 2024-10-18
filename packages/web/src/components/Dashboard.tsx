import { useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import {
  Text,
  Menu,
  ActionIcon,
  Button,
  Grid,
  Card,
  Group,
  Stack,
  Box,
  Container,
  SimpleGrid,
  Badge,
  Divider,
} from "@mantine/core";
import {
  IconBell,
  IconSettings,
  IconLogout,
  IconChevronDown,
  IconArrowUpRight,
  IconArrowDownRight,
} from "@tabler/icons-react";

export default function Dashboard() {
  const { signOut } = useAuth();
  const { user } = useUser();

  const [selectedWorkspace, setSelectedWorkspace] = useState("Personal");

  const workspaces = ["Personal", "Work", "Family"];

  const recentTransactions = [
    {
      id: 1,
      description: "Grocery Shopping",
      amount: -120.5,
      date: "2023-05-15",
    },
    {
      id: 2,
      description: "Salary Deposit",
      amount: 3000.0,
      date: "2023-05-01",
    },
    { id: 3, description: "Electric Bill", amount: -85.2, date: "2023-05-10" },
    {
      id: 4,
      description: "Freelance Payment",
      amount: 750.0,
      date: "2023-05-20",
    },
    {
      id: 5,
      description: "Restaurant Dinner",
      amount: -65.3,
      date: "2023-05-18",
    },
  ];
  return (
    <Box mb={32}>
      <Box>
        <Container size="xl">
          <Group py="md" justify="space-between">
            <Group>
              <Text size="xl" fw={700}>
                {user?.fullName}
              </Text>
            </Group>

            <Group>
              <Menu shadow="md">
                <Menu.Target>
                  <Button
                    variant="outline"
                    color="violet"
                    rightSection={<IconChevronDown size={14} />}
                  >
                    {selectedWorkspace}
                  </Button>
                </Menu.Target>

                <Menu.Dropdown>
                  {workspaces.map((workspace) => (
                    <Menu.Item
                      key={workspace}
                      onClick={() => setSelectedWorkspace(workspace)}
                    >
                      {workspace}
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>

              <Group>
                <ActionIcon size="input-sm" variant="outline" color="violet">
                  <IconBell size={18} />
                </ActionIcon>
                <Badge
                  size="sm"
                  circle
                  color={"violet"}
                  style={{
                    marginLeft: "-24px",
                    marginTop: "-32px",
                    zIndex: 2,
                    marginRight: "-10px",
                  }}
                >
                  10
                </Badge>
              </Group>

              <ActionIcon size="input-sm" variant="outline" color="violet">
                <IconSettings size={18} />
              </ActionIcon>

              {/* <Button
                variant="outline"
                color="violet"
                leftSection={<IconLogout size={14} />}
              >
                Logout
              </Button> */}
              <ActionIcon
                size="input-sm"
                variant="outline"
                color="violet"
                onClick={() => {
                  signOut();
                }}
              >
                <IconLogout size={18} />
              </ActionIcon>
            </Group>
          </Group>
        </Container>
      </Box>

      <Divider color={"violet"} />

      <Container size="xl" mt="xl">
        <Stack>
          <Grid justify="space-between" align="stretch">
            <Grid.Col span={3}>
              <Card
                shadow="sm"
                p="lg"
                radius="md"
                style={{ borderLeft: "4px violet solid" }}
              >
                <Text size="sm">Total Balance</Text>
                <Text size="xl" fw={700} c={"violet"}>
                  $5,750.53
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={3}>
              <Card
                shadow="sm"
                p="lg"
                radius="md"
                style={{ borderLeft: "4px green solid" }}
              >
                <Text size="sm">Monthly Savings</Text>
                <Text size="xl" c={"green"} fw={700}>
                  $1,210.00
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={3}>
              <Card
                shadow="sm"
                p="lg"
                radius="md"
                style={{ borderLeft: "4px orange solid" }}
              >
                <Text size="sm">Expenses This Month</Text>
                <Text size="xl" c={"orange"} fw={700}>
                  $3,240.78
                </Text>
              </Card>
            </Grid.Col>
          </Grid>

          <Card bg="dark.7" mt="sm" px={0}>
            <Text fw={600} size="xl" mb="md">
              Recent Transactions
            </Text>
            <SimpleGrid cols={2} spacing="md">
              {recentTransactions.map((transaction) => (
                <Card key={transaction.id} bg="dark.6" p="md" radius="md">
                  <Group>
                    <Group>
                      <ActionIcon
                        size="lg"
                        radius="xl"
                        variant="light"
                        c={transaction.amount >= 0 ? "teal" : "pink"}
                      >
                        {transaction.amount >= 0 ? (
                          <IconArrowUpRight size={24} />
                        ) : (
                          <IconArrowDownRight size={24} />
                        )}
                      </ActionIcon>
                      <div>
                        <Text fw={600}>{transaction.description}</Text>
                        <Text size="xs" c="dimmed">
                          {transaction.date}
                        </Text>
                      </div>
                    </Group>
                    <Text
                      fw={600}
                      size="lg"
                      c={transaction.amount >= 0 ? "teal" : "pink"}
                    >
                      ${Math.abs(transaction.amount).toFixed(2)}
                    </Text>
                  </Group>
                </Card>
              ))}
            </SimpleGrid>
          </Card>

          <Group justify="center" gap="xl">
            <Button color="violet">Add New Transaction</Button>
            <Button variant="outline" color="violet">
              View All Transactions
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
