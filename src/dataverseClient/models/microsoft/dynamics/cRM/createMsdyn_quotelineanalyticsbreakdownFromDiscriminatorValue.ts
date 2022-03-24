import {Msdyn_quotelineanalyticsbreakdown} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_quotelineanalyticsbreakdownFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_quotelineanalyticsbreakdown {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_quotelineanalyticsbreakdown();
}
