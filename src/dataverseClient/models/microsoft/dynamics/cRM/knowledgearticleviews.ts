import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Crmbaseentity, Knowledgearticle, Principalobjectattributeaccess, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Knowledgearticleviews extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __knowledgearticleid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _knowledgearticleid?: Knowledgearticle | undefined;
    private _knowledgearticleview?: number | undefined;
    private _knowledgearticleviews_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _knowledgeArticleViews_SyncErrors?: Syncerror[] | undefined;
    private _knowledgearticleviewsid?: string | undefined;
    private _location?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _owningbusinessunit?: string | undefined;
    private _owninguser?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    private _viewdate?: Date | undefined;
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
     * Gets the _knowledgearticleid_value property value. 
     * @returns a string
     */
    public get _knowledgearticleid_value() {
        return this.__knowledgearticleid_value;
    };
    /**
     * Sets the _knowledgearticleid_value property value. 
     * @param value Value to set for the _knowledgearticleid_value property.
     */
    public set _knowledgearticleid_value(value: string | undefined) {
        this.__knowledgearticleid_value = value;
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
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Instantiates a new knowledgearticleviews and sets the default values.
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
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Knowledgearticleviews)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Knowledgearticleviews)._createdonbehalfby_value = n.getStringValue(); },
            "_knowledgearticleid_value": (o, n) => { (o as unknown as Knowledgearticleviews)._knowledgearticleid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Knowledgearticleviews)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Knowledgearticleviews)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Knowledgearticleviews)._ownerid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Knowledgearticleviews)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Knowledgearticleviews).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Knowledgearticleviews).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Knowledgearticleviews).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Knowledgearticleviews).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Knowledgearticleviews).importsequencenumber = n.getNumberValue(); },
            "knowledgearticleid": (o, n) => { (o as unknown as Knowledgearticleviews).knowledgearticleid = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "knowledgearticleview": (o, n) => { (o as unknown as Knowledgearticleviews).knowledgearticleview = n.getNumberValue(); },
            "knowledgearticleviews_principalobjectattributeaccess": (o, n) => { (o as unknown as Knowledgearticleviews).knowledgearticleviews_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "knowledgeArticleViews_SyncErrors": (o, n) => { (o as unknown as Knowledgearticleviews).knowledgeArticleViews_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "knowledgearticleviewsid": (o, n) => { (o as unknown as Knowledgearticleviews).knowledgearticleviewsid = n.getStringValue(); },
            "location": (o, n) => { (o as unknown as Knowledgearticleviews).location = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Knowledgearticleviews).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Knowledgearticleviews).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Knowledgearticleviews).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Knowledgearticleviews).overriddencreatedon = n.getDateValue(); },
            "owningbusinessunit": (o, n) => { (o as unknown as Knowledgearticleviews).owningbusinessunit = n.getStringValue(); },
            "owninguser": (o, n) => { (o as unknown as Knowledgearticleviews).owninguser = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Knowledgearticleviews).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Knowledgearticleviews).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Knowledgearticleviews).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Knowledgearticleviews).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Knowledgearticleviews).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Knowledgearticleviews).versionnumber = n.getNumberValue(); },
            "viewdate": (o, n) => { (o as unknown as Knowledgearticleviews).viewdate = n.getDateValue(); },
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
     * Gets the knowledgearticleid property value. 
     * @returns a knowledgearticle
     */
    public get knowledgearticleid() {
        return this._knowledgearticleid;
    };
    /**
     * Sets the knowledgearticleid property value. 
     * @param value Value to set for the knowledgearticleid property.
     */
    public set knowledgearticleid(value: Knowledgearticle | undefined) {
        this._knowledgearticleid = value;
    };
    /**
     * Gets the knowledgearticleview property value. 
     * @returns a integer
     */
    public get knowledgearticleview() {
        return this._knowledgearticleview;
    };
    /**
     * Sets the knowledgearticleview property value. 
     * @param value Value to set for the knowledgearticleview property.
     */
    public set knowledgearticleview(value: number | undefined) {
        this._knowledgearticleview = value;
    };
    /**
     * Gets the knowledgearticleviews_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get knowledgearticleviews_principalobjectattributeaccess() {
        return this._knowledgearticleviews_principalobjectattributeaccess;
    };
    /**
     * Sets the knowledgearticleviews_principalobjectattributeaccess property value. 
     * @param value Value to set for the knowledgearticleviews_principalobjectattributeaccess property.
     */
    public set knowledgearticleviews_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._knowledgearticleviews_principalobjectattributeaccess = value;
    };
    /**
     * Gets the knowledgeArticleViews_SyncErrors property value. 
     * @returns a syncerror
     */
    public get knowledgeArticleViews_SyncErrors() {
        return this._knowledgeArticleViews_SyncErrors;
    };
    /**
     * Sets the knowledgeArticleViews_SyncErrors property value. 
     * @param value Value to set for the KnowledgeArticleViews_SyncErrors property.
     */
    public set knowledgeArticleViews_SyncErrors(value: Syncerror[] | undefined) {
        this._knowledgeArticleViews_SyncErrors = value;
    };
    /**
     * Gets the knowledgearticleviewsid property value. 
     * @returns a string
     */
    public get knowledgearticleviewsid() {
        return this._knowledgearticleviewsid;
    };
    /**
     * Sets the knowledgearticleviewsid property value. 
     * @param value Value to set for the knowledgearticleviewsid property.
     */
    public set knowledgearticleviewsid(value: string | undefined) {
        this._knowledgearticleviewsid = value;
    };
    /**
     * Gets the location property value. 
     * @returns a integer
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. 
     * @param value Value to set for the location property.
     */
    public set location(value: number | undefined) {
        this._location = value;
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
     * Gets the owningbusinessunit property value. 
     * @returns a string
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: string | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a string
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: string | undefined) {
        this._owninguser = value;
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
        writer.writeStringValue("_knowledgearticleid_value", this._knowledgearticleid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Knowledgearticle>("knowledgearticleid", this.knowledgearticleid);
        writer.writeNumberValue("knowledgearticleview", this.knowledgearticleview);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("knowledgearticleviews_principalobjectattributeaccess", this.knowledgearticleviews_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Syncerror>("knowledgeArticleViews_SyncErrors", this.knowledgeArticleViews_SyncErrors);
        writer.writeStringValue("knowledgearticleviewsid", this.knowledgearticleviewsid);
        writer.writeNumberValue("location", this.location);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("owningbusinessunit", this.owningbusinessunit);
        writer.writeStringValue("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeDateValue("viewdate", this.viewdate);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
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
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
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
    /**
     * Gets the viewdate property value. 
     * @returns a Date
     */
    public get viewdate() {
        return this._viewdate;
    };
    /**
     * Sets the viewdate property value. 
     * @param value Value to set for the viewdate property.
     */
    public set viewdate(value: Date | undefined) {
        this._viewdate = value;
    };
}
