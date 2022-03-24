import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_suggestioninteractionFromDiscriminatorValue} from './createMsdyn_suggestioninteractionFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Incident, Mailboxtrackingfolder, Msdyn_ocliveworkitem, Msdyn_suggestioninteraction, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_suggestionrequestpayload extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_suggestionfor_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload?: Msdyn_suggestioninteraction[] | undefined;
    private _msdyn_requestpayload?: string | undefined;
    private _msdyn_responsepayload?: string | undefined;
    private _msdyn_suggestedentitylogicalname?: string | undefined;
    private _msdyn_suggestionfor_incident?: Incident | undefined;
    private _msdyn_suggestionfor_msdyn_ocliveworkitem?: Msdyn_ocliveworkitem | undefined;
    private _msdyn_suggestionrequestpayload_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_suggestionrequestpayload_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_suggestionrequestpayload_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_suggestionrequestpayload_ProcessSession?: Processsession[] | undefined;
    private _msdyn_suggestionrequestpayload_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_suggestionrequestpayloadid?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
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
     * Gets the _msdyn_suggestionfor_value property value. 
     * @returns a string
     */
    public get _msdyn_suggestionfor_value() {
        return this.__msdyn_suggestionfor_value;
    };
    /**
     * Sets the _msdyn_suggestionfor_value property value. 
     * @param value Value to set for the _msdyn_suggestionfor_value property.
     */
    public set _msdyn_suggestionfor_value(value: string | undefined) {
        this.__msdyn_suggestionfor_value = value;
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
     * Instantiates a new msdyn_suggestionrequestpayload and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_suggestionfor_value": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload)._msdyn_suggestionfor_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload = n.getCollectionOfObjectValues<Msdyn_suggestioninteraction>(createMsdyn_suggestioninteractionFromDiscriminatorValue); },
            "msdyn_requestpayload": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).msdyn_requestpayload = n.getStringValue(); },
            "msdyn_responsepayload": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).msdyn_responsepayload = n.getStringValue(); },
            "msdyn_suggestedentitylogicalname": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).msdyn_suggestedentitylogicalname = n.getStringValue(); },
            "msdyn_suggestionfor_incident": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).msdyn_suggestionfor_incident = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "msdyn_suggestionfor_msdyn_ocliveworkitem": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).msdyn_suggestionfor_msdyn_ocliveworkitem = n.getObjectValue<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_suggestionrequestpayload_AsyncOperations": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).msdyn_suggestionrequestpayload_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_suggestionrequestpayload_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).msdyn_suggestionrequestpayload_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_suggestionrequestpayload_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).msdyn_suggestionrequestpayload_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_suggestionrequestpayload_ProcessSession": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).msdyn_suggestionrequestpayload_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_suggestionrequestpayload_SyncErrors": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).msdyn_suggestionrequestpayload_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_suggestionrequestpayloadid": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).msdyn_suggestionrequestpayloadid = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_suggestionrequestpayload).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload property value. 
     * @returns a msdyn_suggestioninteraction
     */
    public get msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload() {
        return this._msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload;
    };
    /**
     * Sets the msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload property value. 
     * @param value Value to set for the msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload property.
     */
    public set msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload(value: Msdyn_suggestioninteraction[] | undefined) {
        this._msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload = value;
    };
    /**
     * Gets the msdyn_requestpayload property value. 
     * @returns a string
     */
    public get msdyn_requestpayload() {
        return this._msdyn_requestpayload;
    };
    /**
     * Sets the msdyn_requestpayload property value. 
     * @param value Value to set for the msdyn_requestpayload property.
     */
    public set msdyn_requestpayload(value: string | undefined) {
        this._msdyn_requestpayload = value;
    };
    /**
     * Gets the msdyn_responsepayload property value. 
     * @returns a string
     */
    public get msdyn_responsepayload() {
        return this._msdyn_responsepayload;
    };
    /**
     * Sets the msdyn_responsepayload property value. 
     * @param value Value to set for the msdyn_responsepayload property.
     */
    public set msdyn_responsepayload(value: string | undefined) {
        this._msdyn_responsepayload = value;
    };
    /**
     * Gets the msdyn_suggestedentitylogicalname property value. 
     * @returns a string
     */
    public get msdyn_suggestedentitylogicalname() {
        return this._msdyn_suggestedentitylogicalname;
    };
    /**
     * Sets the msdyn_suggestedentitylogicalname property value. 
     * @param value Value to set for the msdyn_suggestedentitylogicalname property.
     */
    public set msdyn_suggestedentitylogicalname(value: string | undefined) {
        this._msdyn_suggestedentitylogicalname = value;
    };
    /**
     * Gets the msdyn_suggestionfor_incident property value. 
     * @returns a incident
     */
    public get msdyn_suggestionfor_incident() {
        return this._msdyn_suggestionfor_incident;
    };
    /**
     * Sets the msdyn_suggestionfor_incident property value. 
     * @param value Value to set for the msdyn_suggestionfor_incident property.
     */
    public set msdyn_suggestionfor_incident(value: Incident | undefined) {
        this._msdyn_suggestionfor_incident = value;
    };
    /**
     * Gets the msdyn_suggestionfor_msdyn_ocliveworkitem property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_suggestionfor_msdyn_ocliveworkitem() {
        return this._msdyn_suggestionfor_msdyn_ocliveworkitem;
    };
    /**
     * Sets the msdyn_suggestionfor_msdyn_ocliveworkitem property value. 
     * @param value Value to set for the msdyn_suggestionfor_msdyn_ocliveworkitem property.
     */
    public set msdyn_suggestionfor_msdyn_ocliveworkitem(value: Msdyn_ocliveworkitem | undefined) {
        this._msdyn_suggestionfor_msdyn_ocliveworkitem = value;
    };
    /**
     * Gets the msdyn_suggestionrequestpayload_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_suggestionrequestpayload_AsyncOperations() {
        return this._msdyn_suggestionrequestpayload_AsyncOperations;
    };
    /**
     * Sets the msdyn_suggestionrequestpayload_AsyncOperations property value. 
     * @param value Value to set for the msdyn_suggestionrequestpayload_AsyncOperations property.
     */
    public set msdyn_suggestionrequestpayload_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_suggestionrequestpayload_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_suggestionrequestpayload_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_suggestionrequestpayload_BulkDeleteFailures() {
        return this._msdyn_suggestionrequestpayload_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_suggestionrequestpayload_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_suggestionrequestpayload_BulkDeleteFailures property.
     */
    public set msdyn_suggestionrequestpayload_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_suggestionrequestpayload_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_suggestionrequestpayload_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_suggestionrequestpayload_MailboxTrackingFolders() {
        return this._msdyn_suggestionrequestpayload_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_suggestionrequestpayload_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_suggestionrequestpayload_MailboxTrackingFolders property.
     */
    public set msdyn_suggestionrequestpayload_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_suggestionrequestpayload_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses() {
        return this._msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_suggestionrequestpayload_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_suggestionrequestpayload_ProcessSession() {
        return this._msdyn_suggestionrequestpayload_ProcessSession;
    };
    /**
     * Sets the msdyn_suggestionrequestpayload_ProcessSession property value. 
     * @param value Value to set for the msdyn_suggestionrequestpayload_ProcessSession property.
     */
    public set msdyn_suggestionrequestpayload_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_suggestionrequestpayload_ProcessSession = value;
    };
    /**
     * Gets the msdyn_suggestionrequestpayload_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_suggestionrequestpayload_SyncErrors() {
        return this._msdyn_suggestionrequestpayload_SyncErrors;
    };
    /**
     * Sets the msdyn_suggestionrequestpayload_SyncErrors property value. 
     * @param value Value to set for the msdyn_suggestionrequestpayload_SyncErrors property.
     */
    public set msdyn_suggestionrequestpayload_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_suggestionrequestpayload_SyncErrors = value;
    };
    /**
     * Gets the msdyn_suggestionrequestpayloadid property value. 
     * @returns a string
     */
    public get msdyn_suggestionrequestpayloadid() {
        return this._msdyn_suggestionrequestpayloadid;
    };
    /**
     * Sets the msdyn_suggestionrequestpayloadid property value. 
     * @param value Value to set for the msdyn_suggestionrequestpayloadid property.
     */
    public set msdyn_suggestionrequestpayloadid(value: string | undefined) {
        this._msdyn_suggestionrequestpayloadid = value;
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
        writer.writeStringValue("_msdyn_suggestionfor_value", this._msdyn_suggestionfor_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Msdyn_suggestioninteraction>("msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload", this.msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload);
        writer.writeStringValue("msdyn_requestpayload", this.msdyn_requestpayload);
        writer.writeStringValue("msdyn_responsepayload", this.msdyn_responsepayload);
        writer.writeStringValue("msdyn_suggestedentitylogicalname", this.msdyn_suggestedentitylogicalname);
        writer.writeObjectValue<Incident>("msdyn_suggestionfor_incident", this.msdyn_suggestionfor_incident);
        writer.writeObjectValue<Msdyn_ocliveworkitem>("msdyn_suggestionfor_msdyn_ocliveworkitem", this.msdyn_suggestionfor_msdyn_ocliveworkitem);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_suggestionrequestpayload_AsyncOperations", this.msdyn_suggestionrequestpayload_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_suggestionrequestpayload_BulkDeleteFailures", this.msdyn_suggestionrequestpayload_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_suggestionrequestpayload_MailboxTrackingFolders", this.msdyn_suggestionrequestpayload_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses", this.msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_suggestionrequestpayload_ProcessSession", this.msdyn_suggestionrequestpayload_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_suggestionrequestpayload_SyncErrors", this.msdyn_suggestionrequestpayload_SyncErrors);
        writer.writeStringValue("msdyn_suggestionrequestpayloadid", this.msdyn_suggestionrequestpayloadid);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
