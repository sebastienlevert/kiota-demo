import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createContractFromDiscriminatorValue} from './createContractFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Contract, Crmbaseentity, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Contracttemplate extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _abbreviation?: string | undefined;
    private _allotmenttypecode?: number | undefined;
    private _billingfrequencycode?: number | undefined;
    private _componentstate?: number | undefined;
    private _contract_template_contracts?: Contract[] | undefined;
    private _contractservicelevelcode?: number | undefined;
    private _contractTemplate_AsyncOperations?: Asyncoperation[] | undefined;
    private _contractTemplate_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _contracttemplate_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _contracttemplate_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _contractTemplate_ProcessSessions?: Processsession[] | undefined;
    private _contractTemplate_SyncErrors?: Syncerror[] | undefined;
    private _contracttemplateid?: string | undefined;
    private _contracttemplateidunique?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _effectivitycalendar?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _introducedversion?: string | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _solutionid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _usediscountaspercentage?: boolean | undefined;
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
     * Gets the abbreviation property value. 
     * @returns a string
     */
    public get abbreviation() {
        return this._abbreviation;
    };
    /**
     * Sets the abbreviation property value. 
     * @param value Value to set for the abbreviation property.
     */
    public set abbreviation(value: string | undefined) {
        this._abbreviation = value;
    };
    /**
     * Gets the allotmenttypecode property value. 
     * @returns a integer
     */
    public get allotmenttypecode() {
        return this._allotmenttypecode;
    };
    /**
     * Sets the allotmenttypecode property value. 
     * @param value Value to set for the allotmenttypecode property.
     */
    public set allotmenttypecode(value: number | undefined) {
        this._allotmenttypecode = value;
    };
    /**
     * Gets the billingfrequencycode property value. 
     * @returns a integer
     */
    public get billingfrequencycode() {
        return this._billingfrequencycode;
    };
    /**
     * Sets the billingfrequencycode property value. 
     * @param value Value to set for the billingfrequencycode property.
     */
    public set billingfrequencycode(value: number | undefined) {
        this._billingfrequencycode = value;
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
     * Instantiates a new contracttemplate and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contract_template_contracts property value. 
     * @returns a contract
     */
    public get contract_template_contracts() {
        return this._contract_template_contracts;
    };
    /**
     * Sets the contract_template_contracts property value. 
     * @param value Value to set for the contract_template_contracts property.
     */
    public set contract_template_contracts(value: Contract[] | undefined) {
        this._contract_template_contracts = value;
    };
    /**
     * Gets the contractservicelevelcode property value. 
     * @returns a integer
     */
    public get contractservicelevelcode() {
        return this._contractservicelevelcode;
    };
    /**
     * Sets the contractservicelevelcode property value. 
     * @param value Value to set for the contractservicelevelcode property.
     */
    public set contractservicelevelcode(value: number | undefined) {
        this._contractservicelevelcode = value;
    };
    /**
     * Gets the contractTemplate_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get contractTemplate_AsyncOperations() {
        return this._contractTemplate_AsyncOperations;
    };
    /**
     * Sets the contractTemplate_AsyncOperations property value. 
     * @param value Value to set for the ContractTemplate_AsyncOperations property.
     */
    public set contractTemplate_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._contractTemplate_AsyncOperations = value;
    };
    /**
     * Gets the contractTemplate_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get contractTemplate_BulkDeleteFailures() {
        return this._contractTemplate_BulkDeleteFailures;
    };
    /**
     * Sets the contractTemplate_BulkDeleteFailures property value. 
     * @param value Value to set for the ContractTemplate_BulkDeleteFailures property.
     */
    public set contractTemplate_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._contractTemplate_BulkDeleteFailures = value;
    };
    /**
     * Gets the contracttemplate_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get contracttemplate_MailboxTrackingFolders() {
        return this._contracttemplate_MailboxTrackingFolders;
    };
    /**
     * Sets the contracttemplate_MailboxTrackingFolders property value. 
     * @param value Value to set for the contracttemplate_MailboxTrackingFolders property.
     */
    public set contracttemplate_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._contracttemplate_MailboxTrackingFolders = value;
    };
    /**
     * Gets the contracttemplate_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get contracttemplate_PrincipalObjectAttributeAccesses() {
        return this._contracttemplate_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the contracttemplate_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the contracttemplate_PrincipalObjectAttributeAccesses property.
     */
    public set contracttemplate_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._contracttemplate_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the contractTemplate_ProcessSessions property value. 
     * @returns a processsession
     */
    public get contractTemplate_ProcessSessions() {
        return this._contractTemplate_ProcessSessions;
    };
    /**
     * Sets the contractTemplate_ProcessSessions property value. 
     * @param value Value to set for the ContractTemplate_ProcessSessions property.
     */
    public set contractTemplate_ProcessSessions(value: Processsession[] | undefined) {
        this._contractTemplate_ProcessSessions = value;
    };
    /**
     * Gets the contractTemplate_SyncErrors property value. 
     * @returns a syncerror
     */
    public get contractTemplate_SyncErrors() {
        return this._contractTemplate_SyncErrors;
    };
    /**
     * Sets the contractTemplate_SyncErrors property value. 
     * @param value Value to set for the ContractTemplate_SyncErrors property.
     */
    public set contractTemplate_SyncErrors(value: Syncerror[] | undefined) {
        this._contractTemplate_SyncErrors = value;
    };
    /**
     * Gets the contracttemplateid property value. 
     * @returns a string
     */
    public get contracttemplateid() {
        return this._contracttemplateid;
    };
    /**
     * Sets the contracttemplateid property value. 
     * @param value Value to set for the contracttemplateid property.
     */
    public set contracttemplateid(value: string | undefined) {
        this._contracttemplateid = value;
    };
    /**
     * Gets the contracttemplateidunique property value. 
     * @returns a string
     */
    public get contracttemplateidunique() {
        return this._contracttemplateidunique;
    };
    /**
     * Sets the contracttemplateidunique property value. 
     * @param value Value to set for the contracttemplateidunique property.
     */
    public set contracttemplateidunique(value: string | undefined) {
        this._contracttemplateidunique = value;
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
     * Gets the effectivitycalendar property value. 
     * @returns a string
     */
    public get effectivitycalendar() {
        return this._effectivitycalendar;
    };
    /**
     * Sets the effectivitycalendar property value. 
     * @param value Value to set for the effectivitycalendar property.
     */
    public set effectivitycalendar(value: string | undefined) {
        this._effectivitycalendar = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Contracttemplate)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Contracttemplate)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Contracttemplate)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Contracttemplate)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Contracttemplate)._organizationid_value = n.getStringValue(); },
            "abbreviation": (o, n) => { (o as unknown as Contracttemplate).abbreviation = n.getStringValue(); },
            "allotmenttypecode": (o, n) => { (o as unknown as Contracttemplate).allotmenttypecode = n.getNumberValue(); },
            "billingfrequencycode": (o, n) => { (o as unknown as Contracttemplate).billingfrequencycode = n.getNumberValue(); },
            "componentstate": (o, n) => { (o as unknown as Contracttemplate).componentstate = n.getNumberValue(); },
            "contract_template_contracts": (o, n) => { (o as unknown as Contracttemplate).contract_template_contracts = n.getCollectionOfObjectValues<Contract>(createContractFromDiscriminatorValue); },
            "contractservicelevelcode": (o, n) => { (o as unknown as Contracttemplate).contractservicelevelcode = n.getNumberValue(); },
            "contractTemplate_AsyncOperations": (o, n) => { (o as unknown as Contracttemplate).contractTemplate_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "contractTemplate_BulkDeleteFailures": (o, n) => { (o as unknown as Contracttemplate).contractTemplate_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "contracttemplate_MailboxTrackingFolders": (o, n) => { (o as unknown as Contracttemplate).contracttemplate_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "contracttemplate_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Contracttemplate).contracttemplate_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "contractTemplate_ProcessSessions": (o, n) => { (o as unknown as Contracttemplate).contractTemplate_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "contractTemplate_SyncErrors": (o, n) => { (o as unknown as Contracttemplate).contractTemplate_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "contracttemplateid": (o, n) => { (o as unknown as Contracttemplate).contracttemplateid = n.getStringValue(); },
            "contracttemplateidunique": (o, n) => { (o as unknown as Contracttemplate).contracttemplateidunique = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Contracttemplate).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Contracttemplate).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Contracttemplate).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Contracttemplate).description = n.getStringValue(); },
            "effectivitycalendar": (o, n) => { (o as unknown as Contracttemplate).effectivitycalendar = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Contracttemplate).importsequencenumber = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Contracttemplate).introducedversion = n.getStringValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Contracttemplate).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Contracttemplate).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Contracttemplate).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Contracttemplate).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Contracttemplate).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Contracttemplate).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Contracttemplate).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Contracttemplate).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Contracttemplate).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Contracttemplate).solutionid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Contracttemplate).timezoneruleversionnumber = n.getNumberValue(); },
            "usediscountaspercentage": (o, n) => { (o as unknown as Contracttemplate).usediscountaspercentage = n.getBooleanValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Contracttemplate).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Contracttemplate).versionnumber = n.getNumberValue(); },
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
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
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
        writer.writeStringValue("abbreviation", this.abbreviation);
        writer.writeNumberValue("allotmenttypecode", this.allotmenttypecode);
        writer.writeNumberValue("billingfrequencycode", this.billingfrequencycode);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeCollectionOfObjectValues<Contract>("contract_template_contracts", this.contract_template_contracts);
        writer.writeNumberValue("contractservicelevelcode", this.contractservicelevelcode);
        writer.writeCollectionOfObjectValues<Asyncoperation>("contractTemplate_AsyncOperations", this.contractTemplate_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("contractTemplate_BulkDeleteFailures", this.contractTemplate_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("contracttemplate_MailboxTrackingFolders", this.contracttemplate_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("contracttemplate_PrincipalObjectAttributeAccesses", this.contracttemplate_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("contractTemplate_ProcessSessions", this.contractTemplate_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("contractTemplate_SyncErrors", this.contractTemplate_SyncErrors);
        writer.writeStringValue("contracttemplateid", this.contracttemplateid);
        writer.writeStringValue("contracttemplateidunique", this.contracttemplateidunique);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("effectivitycalendar", this.effectivitycalendar);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeBooleanValue("usediscountaspercentage", this.usediscountaspercentage);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
     * Gets the usediscountaspercentage property value. 
     * @returns a boolean
     */
    public get usediscountaspercentage() {
        return this._usediscountaspercentage;
    };
    /**
     * Sets the usediscountaspercentage property value. 
     * @param value Value to set for the usediscountaspercentage property.
     */
    public set usediscountaspercentage(value: boolean | undefined) {
        this._usediscountaspercentage = value;
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
