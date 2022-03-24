import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createKbarticleFromDiscriminatorValue} from './createKbarticleFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Kbarticle, Processsession, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Kbarticlecomment extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __kbarticleid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private _commenttext?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _kbArticleComment_AsyncOperations?: Asyncoperation[] | undefined;
    private _kbArticleComment_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _kbArticleComment_ProcessSessions?: Processsession[] | undefined;
    private _kbarticlecommentid?: string | undefined;
    private _kbarticleid?: Kbarticle | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _organizationid?: string | undefined;
    private _title?: string | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _kbarticleid_value property value. 
     * @returns a string
     */
    public get _kbarticleid_value() {
        return this.__kbarticleid_value;
    };
    /**
     * Sets the _kbarticleid_value property value. 
     * @param value Value to set for the _kbarticleid_value property.
     */
    public set _kbarticleid_value(value: string | undefined) {
        this.__kbarticleid_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the commenttext property value. 
     * @returns a string
     */
    public get commenttext() {
        return this._commenttext;
    };
    /**
     * Sets the commenttext property value. 
     * @param value Value to set for the commenttext property.
     */
    public set commenttext(value: string | undefined) {
        this._commenttext = value;
    };
    /**
     * Instantiates a new kbarticlecomment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Kbarticlecomment)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Kbarticlecomment)._createdonbehalfby_value = n.getStringValue(); },
            "_kbarticleid_value": (o, n) => { (o as unknown as Kbarticlecomment)._kbarticleid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Kbarticlecomment)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Kbarticlecomment)._modifiedonbehalfby_value = n.getStringValue(); },
            "commenttext": (o, n) => { (o as unknown as Kbarticlecomment).commenttext = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Kbarticlecomment).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Kbarticlecomment).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Kbarticlecomment).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "kbArticleComment_AsyncOperations": (o, n) => { (o as unknown as Kbarticlecomment).kbArticleComment_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "kbArticleComment_BulkDeleteFailures": (o, n) => { (o as unknown as Kbarticlecomment).kbArticleComment_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "kbArticleComment_ProcessSessions": (o, n) => { (o as unknown as Kbarticlecomment).kbArticleComment_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "kbarticlecommentid": (o, n) => { (o as unknown as Kbarticlecomment).kbarticlecommentid = n.getStringValue(); },
            "kbarticleid": (o, n) => { (o as unknown as Kbarticlecomment).kbarticleid = n.getObjectValue<Kbarticle>(createKbarticleFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Kbarticlecomment).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Kbarticlecomment).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Kbarticlecomment).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Kbarticlecomment).organizationid = n.getStringValue(); },
            "title": (o, n) => { (o as unknown as Kbarticlecomment).title = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Kbarticlecomment).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the kbArticleComment_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get kbArticleComment_AsyncOperations() {
        return this._kbArticleComment_AsyncOperations;
    };
    /**
     * Sets the kbArticleComment_AsyncOperations property value. 
     * @param value Value to set for the KbArticleComment_AsyncOperations property.
     */
    public set kbArticleComment_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._kbArticleComment_AsyncOperations = value;
    };
    /**
     * Gets the kbArticleComment_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get kbArticleComment_BulkDeleteFailures() {
        return this._kbArticleComment_BulkDeleteFailures;
    };
    /**
     * Sets the kbArticleComment_BulkDeleteFailures property value. 
     * @param value Value to set for the KbArticleComment_BulkDeleteFailures property.
     */
    public set kbArticleComment_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._kbArticleComment_BulkDeleteFailures = value;
    };
    /**
     * Gets the kbArticleComment_ProcessSessions property value. 
     * @returns a processsession
     */
    public get kbArticleComment_ProcessSessions() {
        return this._kbArticleComment_ProcessSessions;
    };
    /**
     * Sets the kbArticleComment_ProcessSessions property value. 
     * @param value Value to set for the KbArticleComment_ProcessSessions property.
     */
    public set kbArticleComment_ProcessSessions(value: Processsession[] | undefined) {
        this._kbArticleComment_ProcessSessions = value;
    };
    /**
     * Gets the kbarticlecommentid property value. 
     * @returns a string
     */
    public get kbarticlecommentid() {
        return this._kbarticlecommentid;
    };
    /**
     * Sets the kbarticlecommentid property value. 
     * @param value Value to set for the kbarticlecommentid property.
     */
    public set kbarticlecommentid(value: string | undefined) {
        this._kbarticlecommentid = value;
    };
    /**
     * Gets the kbarticleid property value. 
     * @returns a kbarticle
     */
    public get kbarticleid() {
        return this._kbarticleid;
    };
    /**
     * Sets the kbarticleid property value. 
     * @param value Value to set for the kbarticleid property.
     */
    public set kbarticleid(value: Kbarticle | undefined) {
        this._kbarticleid = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a string
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: string | undefined) {
        this._organizationid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_kbarticleid_value", this._kbarticleid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("commenttext", this.commenttext);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("kbArticleComment_AsyncOperations", this.kbArticleComment_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("kbArticleComment_BulkDeleteFailures", this.kbArticleComment_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Processsession>("kbArticleComment_ProcessSessions", this.kbArticleComment_ProcessSessions);
        writer.writeStringValue("kbarticlecommentid", this.kbarticlecommentid);
        writer.writeObjectValue<Kbarticle>("kbarticleid", this.kbarticleid);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("organizationid", this.organizationid);
        writer.writeStringValue("title", this.title);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the title property value. 
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. 
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
