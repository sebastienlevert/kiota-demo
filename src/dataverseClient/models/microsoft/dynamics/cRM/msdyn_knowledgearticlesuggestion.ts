import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {Crmbaseentity, Knowledgearticle} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_knowledgearticlesuggestion extends Crmbaseentity implements Parsable {
    private __msdyn_suggestedentity_value?: string | undefined;
    private _msdyn_additionalcontext?: string | undefined;
    private _msdyn_confidencescore?: number | undefined;
    private _msdyn_keyphrases?: string | undefined;
    private _msdyn_knowledgearticlesuggestionid?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_rank?: number | undefined;
    private _msdyn_suggestedentity?: Knowledgearticle | undefined;
    private _msdyn_suggestionforentitylogicalname?: string | undefined;
    private _msdyn_suggestionforid?: string | undefined;
    /**
     * Gets the _msdyn_suggestedentity_value property value. 
     * @returns a string
     */
    public get _msdyn_suggestedentity_value() {
        return this.__msdyn_suggestedentity_value;
    };
    /**
     * Sets the _msdyn_suggestedentity_value property value. 
     * @param value Value to set for the _msdyn_suggestedentity_value property.
     */
    public set _msdyn_suggestedentity_value(value: string | undefined) {
        this.__msdyn_suggestedentity_value = value;
    };
    /**
     * Instantiates a new msdyn_knowledgearticlesuggestion and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_msdyn_suggestedentity_value": (o, n) => { (o as unknown as Msdyn_knowledgearticlesuggestion)._msdyn_suggestedentity_value = n.getStringValue(); },
            "msdyn_additionalcontext": (o, n) => { (o as unknown as Msdyn_knowledgearticlesuggestion).msdyn_additionalcontext = n.getStringValue(); },
            "msdyn_confidencescore": (o, n) => { (o as unknown as Msdyn_knowledgearticlesuggestion).msdyn_confidencescore = n.getNumberValue(); },
            "msdyn_keyphrases": (o, n) => { (o as unknown as Msdyn_knowledgearticlesuggestion).msdyn_keyphrases = n.getStringValue(); },
            "msdyn_knowledgearticlesuggestionid": (o, n) => { (o as unknown as Msdyn_knowledgearticlesuggestion).msdyn_knowledgearticlesuggestionid = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_knowledgearticlesuggestion).msdyn_name = n.getStringValue(); },
            "msdyn_rank": (o, n) => { (o as unknown as Msdyn_knowledgearticlesuggestion).msdyn_rank = n.getNumberValue(); },
            "msdyn_suggestedentity": (o, n) => { (o as unknown as Msdyn_knowledgearticlesuggestion).msdyn_suggestedentity = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "msdyn_suggestionforentitylogicalname": (o, n) => { (o as unknown as Msdyn_knowledgearticlesuggestion).msdyn_suggestionforentitylogicalname = n.getStringValue(); },
            "msdyn_suggestionforid": (o, n) => { (o as unknown as Msdyn_knowledgearticlesuggestion).msdyn_suggestionforid = n.getStringValue(); },
        };
    };
    /**
     * Gets the msdyn_additionalcontext property value. 
     * @returns a string
     */
    public get msdyn_additionalcontext() {
        return this._msdyn_additionalcontext;
    };
    /**
     * Sets the msdyn_additionalcontext property value. 
     * @param value Value to set for the msdyn_additionalcontext property.
     */
    public set msdyn_additionalcontext(value: string | undefined) {
        this._msdyn_additionalcontext = value;
    };
    /**
     * Gets the msdyn_confidencescore property value. 
     * @returns a int64
     */
    public get msdyn_confidencescore() {
        return this._msdyn_confidencescore;
    };
    /**
     * Sets the msdyn_confidencescore property value. 
     * @param value Value to set for the msdyn_confidencescore property.
     */
    public set msdyn_confidencescore(value: number | undefined) {
        this._msdyn_confidencescore = value;
    };
    /**
     * Gets the msdyn_keyphrases property value. 
     * @returns a string
     */
    public get msdyn_keyphrases() {
        return this._msdyn_keyphrases;
    };
    /**
     * Sets the msdyn_keyphrases property value. 
     * @param value Value to set for the msdyn_keyphrases property.
     */
    public set msdyn_keyphrases(value: string | undefined) {
        this._msdyn_keyphrases = value;
    };
    /**
     * Gets the msdyn_knowledgearticlesuggestionid property value. 
     * @returns a string
     */
    public get msdyn_knowledgearticlesuggestionid() {
        return this._msdyn_knowledgearticlesuggestionid;
    };
    /**
     * Sets the msdyn_knowledgearticlesuggestionid property value. 
     * @param value Value to set for the msdyn_knowledgearticlesuggestionid property.
     */
    public set msdyn_knowledgearticlesuggestionid(value: string | undefined) {
        this._msdyn_knowledgearticlesuggestionid = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_rank property value. 
     * @returns a integer
     */
    public get msdyn_rank() {
        return this._msdyn_rank;
    };
    /**
     * Sets the msdyn_rank property value. 
     * @param value Value to set for the msdyn_rank property.
     */
    public set msdyn_rank(value: number | undefined) {
        this._msdyn_rank = value;
    };
    /**
     * Gets the msdyn_suggestedentity property value. 
     * @returns a knowledgearticle
     */
    public get msdyn_suggestedentity() {
        return this._msdyn_suggestedentity;
    };
    /**
     * Sets the msdyn_suggestedentity property value. 
     * @param value Value to set for the msdyn_suggestedentity property.
     */
    public set msdyn_suggestedentity(value: Knowledgearticle | undefined) {
        this._msdyn_suggestedentity = value;
    };
    /**
     * Gets the msdyn_suggestionforentitylogicalname property value. 
     * @returns a string
     */
    public get msdyn_suggestionforentitylogicalname() {
        return this._msdyn_suggestionforentitylogicalname;
    };
    /**
     * Sets the msdyn_suggestionforentitylogicalname property value. 
     * @param value Value to set for the msdyn_suggestionforentitylogicalname property.
     */
    public set msdyn_suggestionforentitylogicalname(value: string | undefined) {
        this._msdyn_suggestionforentitylogicalname = value;
    };
    /**
     * Gets the msdyn_suggestionforid property value. 
     * @returns a string
     */
    public get msdyn_suggestionforid() {
        return this._msdyn_suggestionforid;
    };
    /**
     * Sets the msdyn_suggestionforid property value. 
     * @param value Value to set for the msdyn_suggestionforid property.
     */
    public set msdyn_suggestionforid(value: string | undefined) {
        this._msdyn_suggestionforid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_msdyn_suggestedentity_value", this._msdyn_suggestedentity_value);
        writer.writeStringValue("msdyn_additionalcontext", this.msdyn_additionalcontext);
        writer.writeNumberValue("msdyn_confidencescore", this.msdyn_confidencescore);
        writer.writeStringValue("msdyn_keyphrases", this.msdyn_keyphrases);
        writer.writeStringValue("msdyn_knowledgearticlesuggestionid", this.msdyn_knowledgearticlesuggestionid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_rank", this.msdyn_rank);
        writer.writeObjectValue<Knowledgearticle>("msdyn_suggestedentity", this.msdyn_suggestedentity);
        writer.writeStringValue("msdyn_suggestionforentitylogicalname", this.msdyn_suggestionforentitylogicalname);
        writer.writeStringValue("msdyn_suggestionforid", this.msdyn_suggestionforid);
    };
}
