import {Userqueryvisualization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserqueryvisualizationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Userqueryvisualization {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Userqueryvisualization();
}
