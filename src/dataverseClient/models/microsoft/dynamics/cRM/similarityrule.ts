import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Crmbaseentity, Organization, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Similarityrule extends Crmbaseentity implements Parsable {
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _activerulefetchxml?: string | undefined;
    private _baseentityname?: string | undefined;
    private _baseentitytypecode?: number | undefined;
    private _componentstate?: number | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _exchangerate?: number | undefined;
    private _excludeinactiverecords?: boolean | undefined;
    private _fetchxmllist?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _matchingentityname?: string | undefined;
    private _matchingentitytypecode?: number | undefined;
    private _maxkeywords?: number | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _ngramsize?: number | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ruleconditionxml?: string | undefined;
    private _similarityrule_AsyncOperations?: Asyncoperation[] | undefined;
    private _similarityruleid?: string | undefined;
    private _similarityruleidunique?: string | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
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
     * Gets the activerulefetchxml property value. 
     * @returns a string
     */
    public get activerulefetchxml() {
        return this._activerulefetchxml;
    };
    /**
     * Sets the activerulefetchxml property value. 
     * @param value Value to set for the activerulefetchxml property.
     */
    public set activerulefetchxml(value: string | undefined) {
        this._activerulefetchxml = value;
    };
    /**
     * Gets the baseentityname property value. 
     * @returns a string
     */
    public get baseentityname() {
        return this._baseentityname;
    };
    /**
     * Sets the baseentityname property value. 
     * @param value Value to set for the baseentityname property.
     */
    public set baseentityname(value: string | undefined) {
        this._baseentityname = value;
    };
    /**
     * Gets the baseentitytypecode property value. 
     * @returns a integer
     */
    public get baseentitytypecode() {
        return this._baseentitytypecode;
    };
    /**
     * Sets the baseentitytypecode property value. 
     * @param value Value to set for the baseentitytypecode property.
     */
    public set baseentitytypecode(value: number | undefined) {
        this._baseentitytypecode = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new similarityrule and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
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
     * Gets the excludeinactiverecords property value. 
     * @returns a boolean
     */
    public get excludeinactiverecords() {
        return this._excludeinactiverecords;
    };
    /**
     * Sets the excludeinactiverecords property value. 
     * @param value Value to set for the excludeinactiverecords property.
     */
    public set excludeinactiverecords(value: boolean | undefined) {
        this._excludeinactiverecords = value;
    };
    /**
     * Gets the fetchxmllist property value. 
     * @returns a string
     */
    public get fetchxmllist() {
        return this._fetchxmllist;
    };
    /**
     * Sets the fetchxmllist property value. 
     * @param value Value to set for the fetchxmllist property.
     */
    public set fetchxmllist(value: string | undefined) {
        this._fetchxmllist = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Similarityrule)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Similarityrule)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Similarityrule)._organizationid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Similarityrule)._transactioncurrencyid_value = n.getStringValue(); },
            "activerulefetchxml": (o, n) => { (o as unknown as Similarityrule).activerulefetchxml = n.getStringValue(); },
            "baseentityname": (o, n) => { (o as unknown as Similarityrule).baseentityname = n.getStringValue(); },
            "baseentitytypecode": (o, n) => { (o as unknown as Similarityrule).baseentitytypecode = n.getNumberValue(); },
            "componentstate": (o, n) => { (o as unknown as Similarityrule).componentstate = n.getNumberValue(); },
            "createdon": (o, n) => { (o as unknown as Similarityrule).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Similarityrule).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Similarityrule).description = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Similarityrule).exchangerate = n.getNumberValue(); },
            "excludeinactiverecords": (o, n) => { (o as unknown as Similarityrule).excludeinactiverecords = n.getBooleanValue(); },
            "fetchxmllist": (o, n) => { (o as unknown as Similarityrule).fetchxmllist = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Similarityrule).importsequencenumber = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Similarityrule).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Similarityrule).ismanaged = n.getBooleanValue(); },
            "matchingentityname": (o, n) => { (o as unknown as Similarityrule).matchingentityname = n.getStringValue(); },
            "matchingentitytypecode": (o, n) => { (o as unknown as Similarityrule).matchingentitytypecode = n.getNumberValue(); },
            "maxkeywords": (o, n) => { (o as unknown as Similarityrule).maxkeywords = n.getNumberValue(); },
            "modifiedon": (o, n) => { (o as unknown as Similarityrule).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Similarityrule).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Similarityrule).name = n.getStringValue(); },
            "ngramsize": (o, n) => { (o as unknown as Similarityrule).ngramsize = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Similarityrule).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Similarityrule).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Similarityrule).overwritetime = n.getDateValue(); },
            "ruleconditionxml": (o, n) => { (o as unknown as Similarityrule).ruleconditionxml = n.getStringValue(); },
            "similarityrule_AsyncOperations": (o, n) => { (o as unknown as Similarityrule).similarityrule_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "similarityruleid": (o, n) => { (o as unknown as Similarityrule).similarityruleid = n.getStringValue(); },
            "similarityruleidunique": (o, n) => { (o as unknown as Similarityrule).similarityruleidunique = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Similarityrule).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Similarityrule).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Similarityrule).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Similarityrule).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Similarityrule).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Similarityrule).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Similarityrule).versionnumber = n.getNumberValue(); },
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
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
    };
    /**
     * Gets the matchingentityname property value. 
     * @returns a string
     */
    public get matchingentityname() {
        return this._matchingentityname;
    };
    /**
     * Sets the matchingentityname property value. 
     * @param value Value to set for the matchingentityname property.
     */
    public set matchingentityname(value: string | undefined) {
        this._matchingentityname = value;
    };
    /**
     * Gets the matchingentitytypecode property value. 
     * @returns a integer
     */
    public get matchingentitytypecode() {
        return this._matchingentitytypecode;
    };
    /**
     * Sets the matchingentitytypecode property value. 
     * @param value Value to set for the matchingentitytypecode property.
     */
    public set matchingentitytypecode(value: number | undefined) {
        this._matchingentitytypecode = value;
    };
    /**
     * Gets the maxkeywords property value. 
     * @returns a integer
     */
    public get maxkeywords() {
        return this._maxkeywords;
    };
    /**
     * Sets the maxkeywords property value. 
     * @param value Value to set for the maxkeywords property.
     */
    public set maxkeywords(value: number | undefined) {
        this._maxkeywords = value;
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
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the ngramsize property value. 
     * @returns a integer
     */
    public get ngramsize() {
        return this._ngramsize;
    };
    /**
     * Sets the ngramsize property value. 
     * @param value Value to set for the ngramsize property.
     */
    public set ngramsize(value: number | undefined) {
        this._ngramsize = value;
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
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Gets the ruleconditionxml property value. 
     * @returns a string
     */
    public get ruleconditionxml() {
        return this._ruleconditionxml;
    };
    /**
     * Sets the ruleconditionxml property value. 
     * @param value Value to set for the ruleconditionxml property.
     */
    public set ruleconditionxml(value: string | undefined) {
        this._ruleconditionxml = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("activerulefetchxml", this.activerulefetchxml);
        writer.writeStringValue("baseentityname", this.baseentityname);
        writer.writeNumberValue("baseentitytypecode", this.baseentitytypecode);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeBooleanValue("excludeinactiverecords", this.excludeinactiverecords);
        writer.writeStringValue("fetchxmllist", this.fetchxmllist);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeStringValue("matchingentityname", this.matchingentityname);
        writer.writeNumberValue("matchingentitytypecode", this.matchingentitytypecode);
        writer.writeNumberValue("maxkeywords", this.maxkeywords);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("ngramsize", this.ngramsize);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("ruleconditionxml", this.ruleconditionxml);
        writer.writeCollectionOfObjectValues<Asyncoperation>("similarityrule_AsyncOperations", this.similarityrule_AsyncOperations);
        writer.writeStringValue("similarityruleid", this.similarityruleid);
        writer.writeStringValue("similarityruleidunique", this.similarityruleidunique);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the similarityrule_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get similarityrule_AsyncOperations() {
        return this._similarityrule_AsyncOperations;
    };
    /**
     * Sets the similarityrule_AsyncOperations property value. 
     * @param value Value to set for the similarityrule_AsyncOperations property.
     */
    public set similarityrule_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._similarityrule_AsyncOperations = value;
    };
    /**
     * Gets the similarityruleid property value. 
     * @returns a string
     */
    public get similarityruleid() {
        return this._similarityruleid;
    };
    /**
     * Sets the similarityruleid property value. 
     * @param value Value to set for the similarityruleid property.
     */
    public set similarityruleid(value: string | undefined) {
        this._similarityruleid = value;
    };
    /**
     * Gets the similarityruleidunique property value. 
     * @returns a string
     */
    public get similarityruleidunique() {
        return this._similarityruleidunique;
    };
    /**
     * Sets the similarityruleidunique property value. 
     * @param value Value to set for the similarityruleidunique property.
     */
    public set similarityruleidunique(value: string | undefined) {
        this._similarityruleidunique = value;
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
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
}
