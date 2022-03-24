import {Savedqueryvisualization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSavedqueryvisualizationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Savedqueryvisualization {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Savedqueryvisualization();
}
