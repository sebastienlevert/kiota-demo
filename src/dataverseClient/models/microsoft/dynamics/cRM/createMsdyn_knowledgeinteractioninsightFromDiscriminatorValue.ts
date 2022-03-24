import {Msdyn_knowledgeinteractioninsight} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_knowledgeinteractioninsightFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_knowledgeinteractioninsight {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_knowledgeinteractioninsight();
}
