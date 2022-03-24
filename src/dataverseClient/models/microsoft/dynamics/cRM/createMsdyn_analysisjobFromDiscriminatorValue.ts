import {Msdyn_analysisjob} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_analysisjobFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_analysisjob {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_analysisjob();
}
