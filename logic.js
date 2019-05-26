/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global transaction processor function about Specialitywork */


/**
 * Track the Servicecentercosts status with transactions Specialitywork
 * @param {org.advisory.blockchain.Specialitywork} sw the transaction istance
 * @transaction
 */

async function Specialitywork(sw) {

    sw.servicecenterID.value += sw.newValue;
    // Get the asset registry that stores the assets. Note that
    // getAssetRegistry() returns a promise, so we have to await for it.
    const assetRegistry = await getAssetRegistry('org.advisory.blockchain.Servicecenter');
    // Update the asset in the asset registry. Again, note
    // that update() returns a promise, so so we have to return
    // the promise so that Composer waits for it to be resolved.
    await assetRegistry.update(sw.servicecenterID); 

    let event = getFactory().newEvent('org.advisory.blockchain', 'workcomplete');
    event.servicecenterID = sw.servicecenterID;
    event.employeeID = sw.employeeID;
    emit(event);
}