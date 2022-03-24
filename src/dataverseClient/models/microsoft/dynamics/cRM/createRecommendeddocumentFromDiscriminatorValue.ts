import {Recommendeddocument} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecommendeddocumentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Recommendeddocument {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Recommendeddocument();
}
