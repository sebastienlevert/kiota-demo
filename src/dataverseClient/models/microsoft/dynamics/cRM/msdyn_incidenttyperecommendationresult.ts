import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_incidenttypeFromDiscriminatorValue} from './createMsdyn_incidenttypeFromDiscriminatorValue';
import {createMsdyn_incidenttypeproductFromDiscriminatorValue} from './createMsdyn_incidenttypeproductFromDiscriminatorValue';
import {createMsdyn_incidenttyperecommendationrunhistoryFromDiscriminatorValue} from './createMsdyn_incidenttyperecommendationrunhistoryFromDiscriminatorValue';
import {createMsdyn_incidenttypeserviceFromDiscriminatorValue} from './createMsdyn_incidenttypeserviceFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_incidenttype, Msdyn_incidenttypeproduct, Msdyn_incidenttyperecommendationrunhistory, Msdyn_incidenttypeservice, Principal, Principalobjectattributeaccess, Processsession, Product, Syncerror, Systemuser, Team, Uom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_incidenttyperecommendationresult extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_incidenttype_value?: string | undefined;
    private __msdyn_incidenttypeformerge_value?: string | undefined;
    private __msdyn_productservice_value?: string | undefined;
    private __msdyn_runhistoryid_value?: string | undefined;
    private __msdyn_unit_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_IncidentType?: Msdyn_incidenttype | undefined;
    private _msdyn_IncidentTypeForMerge?: Msdyn_incidenttype | undefined;
    private _msdyn_incidenttypeid?: string | undefined;
    private _msdyn_incidenttypeidformerge?: string | undefined;
    private _msdyn_incidenttyperecommendationresult_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_incidenttyperecommendationresult_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_incidenttyperecommendationresult_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_incidenttyperecommendationresult_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_incidenttyperecommendationresult_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_incidenttyperecommendationresult_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_incidenttyperecommendationresult_ProcessSession?: Processsession[] | undefined;
    private _msdyn_incidenttyperecommendationresult_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_incidenttyperecommendationresultid?: string | undefined;
    private _msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult?: Msdyn_incidenttypeproduct[] | undefined;
    private _msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult?: Msdyn_incidenttypeservice[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_occurrencetimes?: number | undefined;
    private _msdyn_ProductService?: Product | undefined;
    private _msdyn_productserviceid?: string | undefined;
    private _msdyn_recommendationdescription?: string | undefined;
    private _msdyn_recommendationtype?: number | undefined;
    private _msdyn_RunHistoryId?: Msdyn_incidenttyperecommendationrunhistory | undefined;
    private _msdyn_runid?: string | undefined;
    private _msdyn_scoreranking?: number | undefined;
    private _msdyn_suggestedvalue?: number | undefined;
    private _msdyn_totaloccurrencetimes?: number | undefined;
    private _msdyn_Unit?: Uom | undefined;
    private _msdyn_unitid?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
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
     * Gets the _msdyn_incidenttype_value property value. 
     * @returns a string
     */
    public get _msdyn_incidenttype_value() {
        return this.__msdyn_incidenttype_value;
    };
    /**
     * Sets the _msdyn_incidenttype_value property value. 
     * @param value Value to set for the _msdyn_incidenttype_value property.
     */
    public set _msdyn_incidenttype_value(value: string | undefined) {
        this.__msdyn_incidenttype_value = value;
    };
    /**
     * Gets the _msdyn_incidenttypeformerge_value property value. 
     * @returns a string
     */
    public get _msdyn_incidenttypeformerge_value() {
        return this.__msdyn_incidenttypeformerge_value;
    };
    /**
     * Sets the _msdyn_incidenttypeformerge_value property value. 
     * @param value Value to set for the _msdyn_incidenttypeformerge_value property.
     */
    public set _msdyn_incidenttypeformerge_value(value: string | undefined) {
        this.__msdyn_incidenttypeformerge_value = value;
    };
    /**
     * Gets the _msdyn_productservice_value property value. 
     * @returns a string
     */
    public get _msdyn_productservice_value() {
        return this.__msdyn_productservice_value;
    };
    /**
     * Sets the _msdyn_productservice_value property value. 
     * @param value Value to set for the _msdyn_productservice_value property.
     */
    public set _msdyn_productservice_value(value: string | undefined) {
        this.__msdyn_productservice_value = value;
    };
    /**
     * Gets the _msdyn_runhistoryid_value property value. 
     * @returns a string
     */
    public get _msdyn_runhistoryid_value() {
        return this.__msdyn_runhistoryid_value;
    };
    /**
     * Sets the _msdyn_runhistoryid_value property value. 
     * @param value Value to set for the _msdyn_runhistoryid_value property.
     */
    public set _msdyn_runhistoryid_value(value: string | undefined) {
        this.__msdyn_runhistoryid_value = value;
    };
    /**
     * Gets the _msdyn_unit_value property value. 
     * @returns a string
     */
    public get _msdyn_unit_value() {
        return this.__msdyn_unit_value;
    };
    /**
     * Sets the _msdyn_unit_value property value. 
     * @param value Value to set for the _msdyn_unit_value property.
     */
    public set _msdyn_unit_value(value: string | undefined) {
        this.__msdyn_unit_value = value;
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
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Instantiates a new msdyn_incidenttyperecommendationresult and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_incidenttype_value": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult)._msdyn_incidenttype_value = n.getStringValue(); },
            "_msdyn_incidenttypeformerge_value": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult)._msdyn_incidenttypeformerge_value = n.getStringValue(); },
            "_msdyn_productservice_value": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult)._msdyn_productservice_value = n.getStringValue(); },
            "_msdyn_runhistoryid_value": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult)._msdyn_runhistoryid_value = n.getStringValue(); },
            "_msdyn_unit_value": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult)._msdyn_unit_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_IncidentType": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_IncidentType = n.getObjectValue<Msdyn_incidenttype>(createMsdyn_incidenttypeFromDiscriminatorValue); },
            "msdyn_IncidentTypeForMerge": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_IncidentTypeForMerge = n.getObjectValue<Msdyn_incidenttype>(createMsdyn_incidenttypeFromDiscriminatorValue); },
            "msdyn_incidenttypeid": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_incidenttypeid = n.getStringValue(); },
            "msdyn_incidenttypeidformerge": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_incidenttypeidformerge = n.getStringValue(); },
            "msdyn_incidenttyperecommendationresult_AsyncOperations": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_incidenttyperecommendationresult_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_incidenttyperecommendationresult_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_incidenttyperecommendationresult_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_incidenttyperecommendationresult_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_incidenttyperecommendationresult_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_incidenttyperecommendationresult_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_incidenttyperecommendationresult_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_incidenttyperecommendationresult_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_incidenttyperecommendationresult_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_incidenttyperecommendationresult_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_incidenttyperecommendationresult_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_incidenttyperecommendationresult_ProcessSession": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_incidenttyperecommendationresult_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_incidenttyperecommendationresult_SyncErrors": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_incidenttyperecommendationresult_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_incidenttyperecommendationresultid": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_incidenttyperecommendationresultid = n.getStringValue(); },
            "msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult = n.getCollectionOfObjectValues<Msdyn_incidenttypeproduct>(createMsdyn_incidenttypeproductFromDiscriminatorValue); },
            "msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult = n.getCollectionOfObjectValues<Msdyn_incidenttypeservice>(createMsdyn_incidenttypeserviceFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_name = n.getStringValue(); },
            "msdyn_occurrencetimes": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_occurrencetimes = n.getNumberValue(); },
            "msdyn_ProductService": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_ProductService = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "msdyn_productserviceid": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_productserviceid = n.getStringValue(); },
            "msdyn_recommendationdescription": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_recommendationdescription = n.getStringValue(); },
            "msdyn_recommendationtype": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_recommendationtype = n.getNumberValue(); },
            "msdyn_RunHistoryId": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_RunHistoryId = n.getObjectValue<Msdyn_incidenttyperecommendationrunhistory>(createMsdyn_incidenttyperecommendationrunhistoryFromDiscriminatorValue); },
            "msdyn_runid": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_runid = n.getStringValue(); },
            "msdyn_scoreranking": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_scoreranking = n.getNumberValue(); },
            "msdyn_suggestedvalue": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_suggestedvalue = n.getNumberValue(); },
            "msdyn_totaloccurrencetimes": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_totaloccurrencetimes = n.getNumberValue(); },
            "msdyn_Unit": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_Unit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_unitid": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).msdyn_unitid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_incidenttyperecommendationresult).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_IncidentType property value. 
     * @returns a msdyn_incidenttype
     */
    public get msdyn_IncidentType() {
        return this._msdyn_IncidentType;
    };
    /**
     * Sets the msdyn_IncidentType property value. 
     * @param value Value to set for the msdyn_IncidentType property.
     */
    public set msdyn_IncidentType(value: Msdyn_incidenttype | undefined) {
        this._msdyn_IncidentType = value;
    };
    /**
     * Gets the msdyn_IncidentTypeForMerge property value. 
     * @returns a msdyn_incidenttype
     */
    public get msdyn_IncidentTypeForMerge() {
        return this._msdyn_IncidentTypeForMerge;
    };
    /**
     * Sets the msdyn_IncidentTypeForMerge property value. 
     * @param value Value to set for the msdyn_IncidentTypeForMerge property.
     */
    public set msdyn_IncidentTypeForMerge(value: Msdyn_incidenttype | undefined) {
        this._msdyn_IncidentTypeForMerge = value;
    };
    /**
     * Gets the msdyn_incidenttypeid property value. 
     * @returns a string
     */
    public get msdyn_incidenttypeid() {
        return this._msdyn_incidenttypeid;
    };
    /**
     * Sets the msdyn_incidenttypeid property value. 
     * @param value Value to set for the msdyn_incidenttypeid property.
     */
    public set msdyn_incidenttypeid(value: string | undefined) {
        this._msdyn_incidenttypeid = value;
    };
    /**
     * Gets the msdyn_incidenttypeidformerge property value. 
     * @returns a string
     */
    public get msdyn_incidenttypeidformerge() {
        return this._msdyn_incidenttypeidformerge;
    };
    /**
     * Sets the msdyn_incidenttypeidformerge property value. 
     * @param value Value to set for the msdyn_incidenttypeidformerge property.
     */
    public set msdyn_incidenttypeidformerge(value: string | undefined) {
        this._msdyn_incidenttypeidformerge = value;
    };
    /**
     * Gets the msdyn_incidenttyperecommendationresult_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_incidenttyperecommendationresult_AsyncOperations() {
        return this._msdyn_incidenttyperecommendationresult_AsyncOperations;
    };
    /**
     * Sets the msdyn_incidenttyperecommendationresult_AsyncOperations property value. 
     * @param value Value to set for the msdyn_incidenttyperecommendationresult_AsyncOperations property.
     */
    public set msdyn_incidenttyperecommendationresult_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_incidenttyperecommendationresult_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_incidenttyperecommendationresult_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_incidenttyperecommendationresult_BulkDeleteFailures() {
        return this._msdyn_incidenttyperecommendationresult_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_incidenttyperecommendationresult_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_incidenttyperecommendationresult_BulkDeleteFailures property.
     */
    public set msdyn_incidenttyperecommendationresult_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_incidenttyperecommendationresult_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_incidenttyperecommendationresult_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_incidenttyperecommendationresult_DuplicateBaseRecord() {
        return this._msdyn_incidenttyperecommendationresult_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_incidenttyperecommendationresult_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_incidenttyperecommendationresult_DuplicateBaseRecord property.
     */
    public set msdyn_incidenttyperecommendationresult_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_incidenttyperecommendationresult_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_incidenttyperecommendationresult_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_incidenttyperecommendationresult_DuplicateMatchingRecord() {
        return this._msdyn_incidenttyperecommendationresult_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_incidenttyperecommendationresult_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_incidenttyperecommendationresult_DuplicateMatchingRecord property.
     */
    public set msdyn_incidenttyperecommendationresult_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_incidenttyperecommendationresult_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_incidenttyperecommendationresult_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_incidenttyperecommendationresult_MailboxTrackingFolders() {
        return this._msdyn_incidenttyperecommendationresult_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_incidenttyperecommendationresult_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_incidenttyperecommendationresult_MailboxTrackingFolders property.
     */
    public set msdyn_incidenttyperecommendationresult_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_incidenttyperecommendationresult_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_incidenttyperecommendationresult_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_incidenttyperecommendationresult_PrincipalObjectAttributeAccesses() {
        return this._msdyn_incidenttyperecommendationresult_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_incidenttyperecommendationresult_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_incidenttyperecommendationresult_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_incidenttyperecommendationresult_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_incidenttyperecommendationresult_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_incidenttyperecommendationresult_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_incidenttyperecommendationresult_ProcessSession() {
        return this._msdyn_incidenttyperecommendationresult_ProcessSession;
    };
    /**
     * Sets the msdyn_incidenttyperecommendationresult_ProcessSession property value. 
     * @param value Value to set for the msdyn_incidenttyperecommendationresult_ProcessSession property.
     */
    public set msdyn_incidenttyperecommendationresult_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_incidenttyperecommendationresult_ProcessSession = value;
    };
    /**
     * Gets the msdyn_incidenttyperecommendationresult_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_incidenttyperecommendationresult_SyncErrors() {
        return this._msdyn_incidenttyperecommendationresult_SyncErrors;
    };
    /**
     * Sets the msdyn_incidenttyperecommendationresult_SyncErrors property value. 
     * @param value Value to set for the msdyn_incidenttyperecommendationresult_SyncErrors property.
     */
    public set msdyn_incidenttyperecommendationresult_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_incidenttyperecommendationresult_SyncErrors = value;
    };
    /**
     * Gets the msdyn_incidenttyperecommendationresultid property value. 
     * @returns a string
     */
    public get msdyn_incidenttyperecommendationresultid() {
        return this._msdyn_incidenttyperecommendationresultid;
    };
    /**
     * Sets the msdyn_incidenttyperecommendationresultid property value. 
     * @param value Value to set for the msdyn_incidenttyperecommendationresultid property.
     */
    public set msdyn_incidenttyperecommendationresultid(value: string | undefined) {
        this._msdyn_incidenttyperecommendationresultid = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult property value. 
     * @returns a msdyn_incidenttypeproduct
     */
    public get msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult() {
        return this._msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult;
    };
    /**
     * Sets the msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult property.
     */
    public set msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult(value: Msdyn_incidenttypeproduct[] | undefined) {
        this._msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult property value. 
     * @returns a msdyn_incidenttypeservice
     */
    public get msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult() {
        return this._msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult;
    };
    /**
     * Sets the msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult property.
     */
    public set msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult(value: Msdyn_incidenttypeservice[] | undefined) {
        this._msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult = value;
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
     * Gets the msdyn_occurrencetimes property value. 
     * @returns a integer
     */
    public get msdyn_occurrencetimes() {
        return this._msdyn_occurrencetimes;
    };
    /**
     * Sets the msdyn_occurrencetimes property value. 
     * @param value Value to set for the msdyn_occurrencetimes property.
     */
    public set msdyn_occurrencetimes(value: number | undefined) {
        this._msdyn_occurrencetimes = value;
    };
    /**
     * Gets the msdyn_ProductService property value. 
     * @returns a product
     */
    public get msdyn_ProductService() {
        return this._msdyn_ProductService;
    };
    /**
     * Sets the msdyn_ProductService property value. 
     * @param value Value to set for the msdyn_ProductService property.
     */
    public set msdyn_ProductService(value: Product | undefined) {
        this._msdyn_ProductService = value;
    };
    /**
     * Gets the msdyn_productserviceid property value. 
     * @returns a string
     */
    public get msdyn_productserviceid() {
        return this._msdyn_productserviceid;
    };
    /**
     * Sets the msdyn_productserviceid property value. 
     * @param value Value to set for the msdyn_productserviceid property.
     */
    public set msdyn_productserviceid(value: string | undefined) {
        this._msdyn_productserviceid = value;
    };
    /**
     * Gets the msdyn_recommendationdescription property value. 
     * @returns a string
     */
    public get msdyn_recommendationdescription() {
        return this._msdyn_recommendationdescription;
    };
    /**
     * Sets the msdyn_recommendationdescription property value. 
     * @param value Value to set for the msdyn_recommendationdescription property.
     */
    public set msdyn_recommendationdescription(value: string | undefined) {
        this._msdyn_recommendationdescription = value;
    };
    /**
     * Gets the msdyn_recommendationtype property value. 
     * @returns a integer
     */
    public get msdyn_recommendationtype() {
        return this._msdyn_recommendationtype;
    };
    /**
     * Sets the msdyn_recommendationtype property value. 
     * @param value Value to set for the msdyn_recommendationtype property.
     */
    public set msdyn_recommendationtype(value: number | undefined) {
        this._msdyn_recommendationtype = value;
    };
    /**
     * Gets the msdyn_RunHistoryId property value. 
     * @returns a msdyn_incidenttyperecommendationrunhistory
     */
    public get msdyn_RunHistoryId() {
        return this._msdyn_RunHistoryId;
    };
    /**
     * Sets the msdyn_RunHistoryId property value. 
     * @param value Value to set for the msdyn_RunHistoryId property.
     */
    public set msdyn_RunHistoryId(value: Msdyn_incidenttyperecommendationrunhistory | undefined) {
        this._msdyn_RunHistoryId = value;
    };
    /**
     * Gets the msdyn_runid property value. 
     * @returns a string
     */
    public get msdyn_runid() {
        return this._msdyn_runid;
    };
    /**
     * Sets the msdyn_runid property value. 
     * @param value Value to set for the msdyn_runid property.
     */
    public set msdyn_runid(value: string | undefined) {
        this._msdyn_runid = value;
    };
    /**
     * Gets the msdyn_scoreranking property value. 
     * @returns a integer
     */
    public get msdyn_scoreranking() {
        return this._msdyn_scoreranking;
    };
    /**
     * Sets the msdyn_scoreranking property value. 
     * @param value Value to set for the msdyn_scoreranking property.
     */
    public set msdyn_scoreranking(value: number | undefined) {
        this._msdyn_scoreranking = value;
    };
    /**
     * Gets the msdyn_suggestedvalue property value. 
     * @returns a integer
     */
    public get msdyn_suggestedvalue() {
        return this._msdyn_suggestedvalue;
    };
    /**
     * Sets the msdyn_suggestedvalue property value. 
     * @param value Value to set for the msdyn_suggestedvalue property.
     */
    public set msdyn_suggestedvalue(value: number | undefined) {
        this._msdyn_suggestedvalue = value;
    };
    /**
     * Gets the msdyn_totaloccurrencetimes property value. 
     * @returns a integer
     */
    public get msdyn_totaloccurrencetimes() {
        return this._msdyn_totaloccurrencetimes;
    };
    /**
     * Sets the msdyn_totaloccurrencetimes property value. 
     * @param value Value to set for the msdyn_totaloccurrencetimes property.
     */
    public set msdyn_totaloccurrencetimes(value: number | undefined) {
        this._msdyn_totaloccurrencetimes = value;
    };
    /**
     * Gets the msdyn_Unit property value. 
     * @returns a uom
     */
    public get msdyn_Unit() {
        return this._msdyn_Unit;
    };
    /**
     * Sets the msdyn_Unit property value. 
     * @param value Value to set for the msdyn_Unit property.
     */
    public set msdyn_Unit(value: Uom | undefined) {
        this._msdyn_Unit = value;
    };
    /**
     * Gets the msdyn_unitid property value. 
     * @returns a string
     */
    public get msdyn_unitid() {
        return this._msdyn_unitid;
    };
    /**
     * Sets the msdyn_unitid property value. 
     * @param value Value to set for the msdyn_unitid property.
     */
    public set msdyn_unitid(value: string | undefined) {
        this._msdyn_unitid = value;
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
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
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_incidenttype_value", this._msdyn_incidenttype_value);
        writer.writeStringValue("_msdyn_incidenttypeformerge_value", this._msdyn_incidenttypeformerge_value);
        writer.writeStringValue("_msdyn_productservice_value", this._msdyn_productservice_value);
        writer.writeStringValue("_msdyn_runhistoryid_value", this._msdyn_runhistoryid_value);
        writer.writeStringValue("_msdyn_unit_value", this._msdyn_unit_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_incidenttype>("msdyn_IncidentType", this.msdyn_IncidentType);
        writer.writeObjectValue<Msdyn_incidenttype>("msdyn_IncidentTypeForMerge", this.msdyn_IncidentTypeForMerge);
        writer.writeStringValue("msdyn_incidenttypeid", this.msdyn_incidenttypeid);
        writer.writeStringValue("msdyn_incidenttypeidformerge", this.msdyn_incidenttypeidformerge);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_incidenttyperecommendationresult_AsyncOperations", this.msdyn_incidenttyperecommendationresult_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_incidenttyperecommendationresult_BulkDeleteFailures", this.msdyn_incidenttyperecommendationresult_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_incidenttyperecommendationresult_DuplicateBaseRecord", this.msdyn_incidenttyperecommendationresult_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_incidenttyperecommendationresult_DuplicateMatchingRecord", this.msdyn_incidenttyperecommendationresult_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_incidenttyperecommendationresult_MailboxTrackingFolders", this.msdyn_incidenttyperecommendationresult_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_incidenttyperecommendationresult_PrincipalObjectAttributeAccesses", this.msdyn_incidenttyperecommendationresult_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_incidenttyperecommendationresult_ProcessSession", this.msdyn_incidenttyperecommendationresult_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_incidenttyperecommendationresult_SyncErrors", this.msdyn_incidenttyperecommendationresult_SyncErrors);
        writer.writeStringValue("msdyn_incidenttyperecommendationresultid", this.msdyn_incidenttyperecommendationresultid);
        writer.writeCollectionOfObjectValues<Msdyn_incidenttypeproduct>("msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult", this.msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult);
        writer.writeCollectionOfObjectValues<Msdyn_incidenttypeservice>("msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult", this.msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_occurrencetimes", this.msdyn_occurrencetimes);
        writer.writeObjectValue<Product>("msdyn_ProductService", this.msdyn_ProductService);
        writer.writeStringValue("msdyn_productserviceid", this.msdyn_productserviceid);
        writer.writeStringValue("msdyn_recommendationdescription", this.msdyn_recommendationdescription);
        writer.writeNumberValue("msdyn_recommendationtype", this.msdyn_recommendationtype);
        writer.writeObjectValue<Msdyn_incidenttyperecommendationrunhistory>("msdyn_RunHistoryId", this.msdyn_RunHistoryId);
        writer.writeStringValue("msdyn_runid", this.msdyn_runid);
        writer.writeNumberValue("msdyn_scoreranking", this.msdyn_scoreranking);
        writer.writeNumberValue("msdyn_suggestedvalue", this.msdyn_suggestedvalue);
        writer.writeNumberValue("msdyn_totaloccurrencetimes", this.msdyn_totaloccurrencetimes);
        writer.writeObjectValue<Uom>("msdyn_Unit", this.msdyn_Unit);
        writer.writeStringValue("msdyn_unitid", this.msdyn_unitid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
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
