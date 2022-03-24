import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Organization, Processsession, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Businessunitnewsarticle extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _activeon?: Date | undefined;
    private _activeuntil?: Date | undefined;
    private _articletitle?: string | undefined;
    private _articletypecode?: number | undefined;
    private _articleurl?: string | undefined;
    private _businessUnitNewsArticle_AsyncOperations?: Asyncoperation[] | undefined;
    private _businessUnitNewsArticle_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _businessUnitNewsArticle_ProcessSessions?: Processsession[] | undefined;
    private _businessunitnewsarticleid?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _newsarticle?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _showonhomepage?: boolean | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
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
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the activeon property value. 
     * @returns a Date
     */
    public get activeon() {
        return this._activeon;
    };
    /**
     * Sets the activeon property value. 
     * @param value Value to set for the activeon property.
     */
    public set activeon(value: Date | undefined) {
        this._activeon = value;
    };
    /**
     * Gets the activeuntil property value. 
     * @returns a Date
     */
    public get activeuntil() {
        return this._activeuntil;
    };
    /**
     * Sets the activeuntil property value. 
     * @param value Value to set for the activeuntil property.
     */
    public set activeuntil(value: Date | undefined) {
        this._activeuntil = value;
    };
    /**
     * Gets the articletitle property value. 
     * @returns a string
     */
    public get articletitle() {
        return this._articletitle;
    };
    /**
     * Sets the articletitle property value. 
     * @param value Value to set for the articletitle property.
     */
    public set articletitle(value: string | undefined) {
        this._articletitle = value;
    };
    /**
     * Gets the articletypecode property value. 
     * @returns a integer
     */
    public get articletypecode() {
        return this._articletypecode;
    };
    /**
     * Sets the articletypecode property value. 
     * @param value Value to set for the articletypecode property.
     */
    public set articletypecode(value: number | undefined) {
        this._articletypecode = value;
    };
    /**
     * Gets the articleurl property value. 
     * @returns a string
     */
    public get articleurl() {
        return this._articleurl;
    };
    /**
     * Sets the articleurl property value. 
     * @param value Value to set for the articleurl property.
     */
    public set articleurl(value: string | undefined) {
        this._articleurl = value;
    };
    /**
     * Gets the businessUnitNewsArticle_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get businessUnitNewsArticle_AsyncOperations() {
        return this._businessUnitNewsArticle_AsyncOperations;
    };
    /**
     * Sets the businessUnitNewsArticle_AsyncOperations property value. 
     * @param value Value to set for the BusinessUnitNewsArticle_AsyncOperations property.
     */
    public set businessUnitNewsArticle_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._businessUnitNewsArticle_AsyncOperations = value;
    };
    /**
     * Gets the businessUnitNewsArticle_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get businessUnitNewsArticle_BulkDeleteFailures() {
        return this._businessUnitNewsArticle_BulkDeleteFailures;
    };
    /**
     * Sets the businessUnitNewsArticle_BulkDeleteFailures property value. 
     * @param value Value to set for the BusinessUnitNewsArticle_BulkDeleteFailures property.
     */
    public set businessUnitNewsArticle_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._businessUnitNewsArticle_BulkDeleteFailures = value;
    };
    /**
     * Gets the businessUnitNewsArticle_ProcessSessions property value. 
     * @returns a processsession
     */
    public get businessUnitNewsArticle_ProcessSessions() {
        return this._businessUnitNewsArticle_ProcessSessions;
    };
    /**
     * Sets the businessUnitNewsArticle_ProcessSessions property value. 
     * @param value Value to set for the BusinessUnitNewsArticle_ProcessSessions property.
     */
    public set businessUnitNewsArticle_ProcessSessions(value: Processsession[] | undefined) {
        this._businessUnitNewsArticle_ProcessSessions = value;
    };
    /**
     * Gets the businessunitnewsarticleid property value. 
     * @returns a string
     */
    public get businessunitnewsarticleid() {
        return this._businessunitnewsarticleid;
    };
    /**
     * Sets the businessunitnewsarticleid property value. 
     * @param value Value to set for the businessunitnewsarticleid property.
     */
    public set businessunitnewsarticleid(value: string | undefined) {
        this._businessunitnewsarticleid = value;
    };
    /**
     * Instantiates a new businessunitnewsarticle and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Businessunitnewsarticle)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Businessunitnewsarticle)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Businessunitnewsarticle)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Businessunitnewsarticle)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Businessunitnewsarticle)._organizationid_value = n.getStringValue(); },
            "activeon": (o, n) => { (o as unknown as Businessunitnewsarticle).activeon = n.getDateValue(); },
            "activeuntil": (o, n) => { (o as unknown as Businessunitnewsarticle).activeuntil = n.getDateValue(); },
            "articletitle": (o, n) => { (o as unknown as Businessunitnewsarticle).articletitle = n.getStringValue(); },
            "articletypecode": (o, n) => { (o as unknown as Businessunitnewsarticle).articletypecode = n.getNumberValue(); },
            "articleurl": (o, n) => { (o as unknown as Businessunitnewsarticle).articleurl = n.getStringValue(); },
            "businessUnitNewsArticle_AsyncOperations": (o, n) => { (o as unknown as Businessunitnewsarticle).businessUnitNewsArticle_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "businessUnitNewsArticle_BulkDeleteFailures": (o, n) => { (o as unknown as Businessunitnewsarticle).businessUnitNewsArticle_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "businessUnitNewsArticle_ProcessSessions": (o, n) => { (o as unknown as Businessunitnewsarticle).businessUnitNewsArticle_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "businessunitnewsarticleid": (o, n) => { (o as unknown as Businessunitnewsarticle).businessunitnewsarticleid = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Businessunitnewsarticle).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Businessunitnewsarticle).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Businessunitnewsarticle).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Businessunitnewsarticle).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Businessunitnewsarticle).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Businessunitnewsarticle).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Businessunitnewsarticle).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "newsarticle": (o, n) => { (o as unknown as Businessunitnewsarticle).newsarticle = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Businessunitnewsarticle).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Businessunitnewsarticle).overriddencreatedon = n.getDateValue(); },
            "showonhomepage": (o, n) => { (o as unknown as Businessunitnewsarticle).showonhomepage = n.getBooleanValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Businessunitnewsarticle).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Businessunitnewsarticle).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Businessunitnewsarticle).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
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
     * Gets the newsarticle property value. 
     * @returns a string
     */
    public get newsarticle() {
        return this._newsarticle;
    };
    /**
     * Sets the newsarticle property value. 
     * @param value Value to set for the newsarticle property.
     */
    public set newsarticle(value: string | undefined) {
        this._newsarticle = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
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
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeDateValue("activeon", this.activeon);
        writer.writeDateValue("activeuntil", this.activeuntil);
        writer.writeStringValue("articletitle", this.articletitle);
        writer.writeNumberValue("articletypecode", this.articletypecode);
        writer.writeStringValue("articleurl", this.articleurl);
        writer.writeCollectionOfObjectValues<Asyncoperation>("businessUnitNewsArticle_AsyncOperations", this.businessUnitNewsArticle_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("businessUnitNewsArticle_BulkDeleteFailures", this.businessUnitNewsArticle_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Processsession>("businessUnitNewsArticle_ProcessSessions", this.businessUnitNewsArticle_ProcessSessions);
        writer.writeStringValue("businessunitnewsarticleid", this.businessunitnewsarticleid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("newsarticle", this.newsarticle);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeBooleanValue("showonhomepage", this.showonhomepage);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the showonhomepage property value. 
     * @returns a boolean
     */
    public get showonhomepage() {
        return this._showonhomepage;
    };
    /**
     * Sets the showonhomepage property value. 
     * @param value Value to set for the showonhomepage property.
     */
    public set showonhomepage(value: boolean | undefined) {
        this._showonhomepage = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
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
