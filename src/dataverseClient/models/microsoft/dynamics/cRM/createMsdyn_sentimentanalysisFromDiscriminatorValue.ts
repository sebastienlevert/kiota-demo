import {Msdyn_sentimentanalysis} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_sentimentanalysisFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_sentimentanalysis {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_sentimentanalysis();
}
