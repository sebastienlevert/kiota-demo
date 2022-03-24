import {Msdyn_salesroutingrun} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_salesroutingrunFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_salesroutingrun {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_salesroutingrun();
}
