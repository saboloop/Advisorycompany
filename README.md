# Advisorycompany

> This is a company with service centers who charge each other for services used. It consists of an employee pool with different ranks. Each Employee belongs to a Service center. He/She can also work for other Service centers, this is usually for special work required. For each work, a transaction is tiggered.

This business network of advisorycompany defines:

**Participant**
`Employee`

**Asset**
`Servicecenter`

**Transaction**
`Specialitywork`

**Event**
`workcomplete`

The assets Servicecenter can be updated by transactions. For each work done by a participant Employee, the value increases of the Servicecenter. Transactions are called specialitywork, and contain the ServicecenterID, the EmployeeID and the value for which the Employee has worked for that center.


## License <a name="license"></a>
Hyperledger Project source code files are made available under the Apache License, Version 2.0 (Apache-2.0), located in the LICENSE file. Hyperledger Project documentation files are made available under the Creative Commons Attribution 4.0 International License (CC-BY-4.0), available at http://creativecommons.org/licenses/by/4.0/.
